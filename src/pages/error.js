import React from "react";
import { Link } from "react-router-dom";
import SiteRoutes from "./../constants/url.ts";
import app from "./../components/App/app.module.scss";

const { ABOUT, APP } = SiteRoutes;
const Error = () => {
  return (
    <div className={app.container}>
      <h1>Несуществующая страница</h1>
      <p>Страницы по этому адресу не существует</p>
      <p>
        Перейти на страницу <Link to={ABOUT}> информации</Link>
      </p>
      <p>
        Перейти на страницу <Link to={APP}>списк дел</Link>
      </p>
    </div>
  );
};

export default Error;
