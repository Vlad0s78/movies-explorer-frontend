import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="body">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isAuth={isAuth} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
