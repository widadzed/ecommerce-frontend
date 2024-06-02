import React from "react";
import styles from "./Deal.module.css";
import image5 from "/image5.jpg";
import image6 from "/image6.jpg";
import image7 from "/image7.jpg";
import days from "/days.jpg";
import hour from "/hour.jpg";
import min from "/min.jpg";
import sec from "/sec.jpg";

const Deal = () => {
  return (
    <section className={styles.dealSection}>
      <div className={styles.container}>
        <div className={styles.dealcontent}>
          <h1>Deals Of The Month</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Scelerisque duis ultrices sollicitudin aliquam sem. <br />{" "}
            Scelerisque duis ultrices sollicitudin
          </p>
          <button className={styles.buynow}>Buy Now</button>
          <p>Hurry, Before It's Too Late!</p>
          <div className={styles.timer}>
            <img src={days} alt="days" className={styles.time} />
            <img src={hour} alt="hour" className={styles.time} />
            <img src={min} alt="min" className={styles.time} />
            <img src={sec} alt="sec" className={styles.time} />
           


          </div>
        </div>
        <div className={styles.productcontent}>
          <img src={image5} alt="5" className={styles.productImage5} />
          <img src={image6} alt="6" className={styles.productImage6} />
          <img src={image7} alt="7" className={styles.productImage7} />
        </div>
      </div>
    </section>
  );
};
export default Deal;
