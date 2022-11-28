import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar"; 
import {useRouter} from "next/router";
import ProductNavbar from "./ProductNavbar";

const Layout = (props) => {
    const {children, footerstatus} = props;
    const router = useRouter();

    return(
        <>
        {true ? (<div className="container-fluid">
            <Header/>
            {router.pathname !== "/Product" && <Navbar/>}
            {router.pathname === "/Product" &&  <ProductNavbar/>}
            {children}
            {!footerstatus && (<Footer/>)}
        </div>): (
            <div className="container-fluid">
            <Header/>
            <Navbar/>
            {children}
            {!footerstatus && (<Footer/>)}
        </div>
        )}
        </>
    )
}
export default Layout;