import Link from "next/link";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-info mb-4 p-2">
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="logo">
          <Link href="/"> <Image src="/vercel.svg" height={20} width={100} /></Link>
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav col-lg-8">
            <li class="nav-item active">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" href="/Contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/courses" className="nav-link">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" href="/Facilities">
                Facilities
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" href="/Product">
                Products
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
