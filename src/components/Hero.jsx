import React from 'react';
import styles from './Hero.module.css';
import image1 from '/image01.jpg';
import image2 from '/image02.jpg';
import image3 from '/image03.jpg';
import image4 from '/image04.jpg';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <img src={image1} alt="1" className={`${styles.heroImage} ${styles.leftImage}`} />
        <div className={styles.heroContentWrapper}>
          <img src={image3} alt="3" className={`${styles.heroImage} ${styles.topImage}`} />
          <div className={styles.heroContent}>
            <h1>Welcome to MyShop</h1>
            <p>Your one-stop shop for everything!</p>
            <button className={styles.shopNow}>Shop Now</button>
          </div>
          <img src={image4} alt="4" className={`${styles.heroImage} ${styles.bottomImage}`} />
        </div>
        <img src={image2} alt="2" className={`${styles.heroImage} ${styles.rightImage}`} />
      </div>
    </section>
  );
};
export default Hero;
