import React from "react";
import css from "css-loader";
import styles from "./Footer.css";

const Footer = props => {
  return (
     <div className="ifooter"> {/*className={ styles.ifooter }*/}
      <footer>
        &copy; Orchestrade 2018
      </footer>
    </div>
  );
};

export default Footer;
