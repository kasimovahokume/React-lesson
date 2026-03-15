import React from "react";

export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="nav-link text-white" href="#">Home</a>
        <a className="nav-link text-white" href="#">About</a>
        <a className="nav-link text-white" href="#">Contact</a>
      </div>
    </nav>
  );
}