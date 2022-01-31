import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

const WebRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default WebRoutes;
