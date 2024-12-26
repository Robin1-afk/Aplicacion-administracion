import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>Bienvenido</h1>
        <Link to="/login">Iniciar Sesión</Link>
    </div>
);

export default Home;
