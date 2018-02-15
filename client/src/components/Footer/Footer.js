import React from "react";
import css from "css-loader";
import styles from "./Footer.css";

const Footer = props => {
  return (
    <div className="text-center bg-dark text-white ifooter" className={ styles.ifooter }>
      <footer>
        &copy; Orchestrade 2018 &emsp;&emsp;
        <a href="/login">Login &#9675; Signup</a>
      </footer>
    </div>
  );
};

export default Footer;
