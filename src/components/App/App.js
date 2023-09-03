import React from "react";
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
import { Route, Routes } from "react-router-dom";

// всременно для теста верстки использую isAuth

function App() {
  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isAuth={false} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header isAuth={true} />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header isAuth={true} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header isAuth={true} />
                <Profile />
              </>
            }
          />
          <Route
            path="/not-found"
            element={
              <>
                <NotFound />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
