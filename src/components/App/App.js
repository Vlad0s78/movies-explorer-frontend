import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getSavedMovies } from "../../utils/MainApi";
import * as mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [updateProfileMessage, setUpdateProfileMessage] = useState("");
  const [errorGlobalMessage, setErrorGlobalMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
          navigate(location.pathname, { replace: true });
        })
        .catch((err) => {
          console.error("Ошибка при проверке токена:", err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке сохраненных фильмов:", error);
        });
    }
  }, [isLoggedIn]);

  const handleRegister = (data) => {
    mainApi
      .register(data)
      .then((infoUser) => {
        setIsLoggedIn(true);
        setCurrentUser(infoUser);
        handleLogin(data);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === "ОшибОЧКА: 409") {
          setErrorGlobalMessage("Такой email уже существует.");
          console.log(err);
        }
      });
  };

  const handleLogin = (data) => {
    mainApi
      .login(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === "ОшибОЧКА: 401") {
          setErrorGlobalMessage("Такого пользователя не существует.");
          console.log(err);
        }
      });
  };

  function handleSignout() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  }

  const handleUpdateUser = (newUserData) => {
    mainApi
      .setUserInfo(newUserData)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        setUpdateProfileMessage("success");
      })
      .catch((error) => {
        console.error("Ошибка при обновлении профиля:", error);
        setUpdateProfileMessage("error");
      });
  };

  function resetErrorGlobalMessage() {
    setErrorGlobalMessage("");
  }

  function filterByName(movies, text) {
    return movies.filter(({ nameRU, nameEN }) => nameRU.toLowerCase().includes(text.toLowerCase()) || nameEN.toLowerCase().includes(text.toLowerCase()));
  }

  const myMovies = (movie) => {
    mainApi
      .addMovieToSaved(movie)
      .then((myMovie) => {
        setSavedMovies([...savedMovies, myMovie]);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };

  const deleteMovies = (id) => {
    mainApi
      .deleteCard(id)
      .then(({ _id: delId }) => {
        const resultsSavedMovies = savedMovies.filter(({ _id }) => _id !== delId);
        setSavedMovies(resultsSavedMovies);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path="/movies"
              element={<ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} filterByName={filterByName} myMovies={myMovies} savedMovies={savedMovies} deleteMovies={deleteMovies} />}
            />
            <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} filterByName={filterByName} isLoggedIn={isLoggedIn} savedMovies={savedMovies} deleteMovies={deleteMovies} />} />

            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Register onRegister={handleRegister} errorGlobalMessage={errorGlobalMessage} resetErrorGlobalMessage={resetErrorGlobalMessage} isLoggedIn={isLoggedIn} />
                )
              }
            />

            <Route
              path="/signin"
              element={isLoggedIn ? <Navigate to="/movies" /> : <Login onLogin={handleLogin} errorGlobalMessage={errorGlobalMessage} resetErrorGlobalMessage={resetErrorGlobalMessage} />}
            />

            <Route
              path="/profile"
              element={<ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} onSignout={handleSignout} onUpdateUser={handleUpdateUser} updateProfileMessage={updateProfileMessage} />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
