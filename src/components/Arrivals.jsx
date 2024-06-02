import styles from "./Arrivals.module.css";
import Button from "./Button";
import CartItem from "./CartItem";
import useFetch from "../Hooks/UseFetch";
//import Cart from "./Cart";

const Arrivals = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("http://localhost:3000/api/products/");
  return (
    <section className={styles.arrivalsection}>
      <div className={styles.container}>
        <h1>New Arrivals</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis
          ultrices sollicitudin
        </p>

        <div className={styles.categories}>
          <Button
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "white",
              width: "200px",
            }}
          >
            Men's Fashion
          </Button>
          <Button
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "white",
              width: "200px",
            }}
          >
            Women's Fashion
          </Button>
          <Button
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "white",
              width: "200px",
            }}
          >
            Women Accessories
          </Button>
          <Button
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "white",
              width: "200px",
            }}
          >
            Men Accessories
          </Button>
          <Button
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "white",
              width: "200px",
            }}
          >
            Discount Deals
          </Button>
        </div>
        <div className={styles.grid}>
          <h1>Our Products</h1>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <div className={styles.productlist}>
            {products &&
              products.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Arrivals;
