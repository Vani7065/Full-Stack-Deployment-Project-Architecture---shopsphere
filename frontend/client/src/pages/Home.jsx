import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

function Home() {

  return (

    <>
      <Navbar />

      <Hero />

      <section className="features">

        <div className="card">

          <h2>1000+</h2>

          <p>Products</p>

        </div>

        <div className="card">

          <h2>500+</h2>

          <p>Customers</p>

        </div>

        <div className="card">

          <h2>24/7</h2>

          <p>Support</p>

        </div>

      </section>

      <Footer />
    </>

  )
}

export default Home