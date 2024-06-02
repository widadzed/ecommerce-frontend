
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/register" className={styles.link}>Register</Link>
      <Link to="/login" className={styles.link}>Login</Link>
    </nav>
  );
};

export default Navbar;
