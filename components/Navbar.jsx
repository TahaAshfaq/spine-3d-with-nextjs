import React from 'react';
import styles from "@/styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-logo']}>
        <h1>MyApp</h1>
      </div>
      <div className={styles['nav-links']}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
