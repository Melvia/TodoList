import React from "react";
import { Link } from "react-router-dom";
import SiteRoutes from "./../constants/url.ts";
import app from "./../components/App/app.module.css";

const { APP } = SiteRoutes;
const About = () => {
  return (
    <div className={app.container}>
      <h1>Описание</h1>
      <p>
        {" "}
        ФИО разработчика: <b>Руденко Наталья</b>
      </p>
      <Link to={APP}>Ссылка на список дел</Link>
    </div>
  );
};

export default About;
