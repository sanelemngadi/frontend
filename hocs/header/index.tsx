import React from 'react';
// import ActiveLink from '../../components/context/ActiveLink';
import styles from "./styles/Header.module.scss";

const links = ["Home", "About", "Contacts"];
const makeHref = (name: string) => {
    return `/${name === "Home" ? "" : `${name.toLowerCase()}/`}`;
}

const Navbar = () => {
    return (
        <div className={styles.appbar}>
            <header>
                Header
            </header>
        </div>
    )
}

export default Navbar;