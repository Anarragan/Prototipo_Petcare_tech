import Hero from "../../components/landing/Hero";
import Services from "../../components/landing/Services";
import About from "../../components/landing/About";
import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Footer />
        </>
    )
}

export default Landing; 