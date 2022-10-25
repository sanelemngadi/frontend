import React from 'react';
import styles from "./styles/Footer.module.scss";

const Footer = () => {
    const date = new Date();
    return (
        <footer className={styles.box}>
            <div className={styles.container}>
                <p>Mmasco {date.getFullYear()} . Website Created by <b><a href="https://www.sanelemngadi.com">Sanele Mngadi</a></b>.</p>
            </div>
        </footer>
    )
}

export default Footer