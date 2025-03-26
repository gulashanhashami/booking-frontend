import React from "react";
import logoWhite from "../../resources/images/logo-white.svg";

export const Footer = ()=>{

    return (
        <footer className="bg-primary py-12">
            <div className="container mx-auto text-white flex justify-between">
                <a href="">
                <img src={logoWhite} alt="" />
                </a>
                <p>Your first choice & book your best services</p>
                <p>Contact: +91 9345238756</p>
                <p>Email: company@gmail.com</p>
                <p>Twitter: company profile Id</p>
            </div>
        </footer>
    );
}