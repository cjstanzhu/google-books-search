import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">📚 Google Books</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>Search</Link>
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-item nav-link active" : "nav-item nav-link"}>Saved</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;

