import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.scss"

const Header = ({}) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
      <div className="logo">
          <Link href="/"> <Image src="/vercel.svg" height={20} width={100} /></Link>
        </div>
      </div>
      <div className="col-md-6 text-end">
        <button
          type="button"
          className="btn  btn-secondary m-3 ps-5 pe-5 fw-bold"
        >
          <Link href="/login">LOGIN</Link>
        </button>
        <button
          type="button"
          className="btn  btn-secondary m-3 ps-5 pe-5 fw-bold"
        >
          <Link href="/register text-white">REGISTER</Link>
        </button>
      </div>
    </div>
  </div>
);
};
  


export default Header;
