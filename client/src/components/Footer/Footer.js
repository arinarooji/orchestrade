import React from 'react';
import "./Footer.css";

const Footer = (props) => {
    return (
        <div className="text-center bg-dark text-white index-footer">
            <footer>
                &copy; Orchestrade 2018
                <br/>
                <a href="#">Login &#9675; Signup</a>
            </footer>
        </div>
    );
};

export default Footer;