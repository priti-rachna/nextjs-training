import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar"; 

const Layout = (props) => {
    const {children, footerstatus} = props;
    return(
        <>
        {true ? (<div className="container-fluid">
            <Header/>
            <Navbar/>
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