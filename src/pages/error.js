import React from "react";
import { Link } from "react-router-dom";
import SiteRoutes from "./../constants/url";
import app from "./../components/App/app.module.css";

const { ABOUT, APP } = SiteRoutes;
const Error = () => {
  return (
    <div className={app.container}>
      <h1>Страницы по этому адресу не существует</h1>
      <Link to={ABOUT}>Перейти на страницу информации</Link>
      <Link to={APP}>Перейти на страницу списк дел</Link>
    </div>
  );
};

export default Error;
