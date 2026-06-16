import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Discover Amazing Products</h1>

        <p>
          Premium shopping experience with modern design.
        </p>

        <Link
          to="/products"
          className="hero-btn"
        >
          Explore Now
        </Link>

      </motion.div>
    </section>
  );
}

export default Hero;