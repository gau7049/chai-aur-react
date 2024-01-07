import React from "react";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <Header />
            <Outlet /> 
            {/* Outlet: Works dynamically means header footer will remain same but outlet change as we want, so it is optimized technique we can say.. */}
            <Footer />
        </>
    )
}