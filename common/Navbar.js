import React from "react";
import Link from 'next/link';
import styles from "../styles/Navbar.module.scss";

const Navbar = ({}) => {
    return(
        <div className={styles.navbar}>

      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Ecommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/facilities">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/batches">
                  Batches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" href="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    )
}

export default Navbar;