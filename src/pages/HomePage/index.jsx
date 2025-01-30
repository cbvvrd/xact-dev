import About from "../../components/About";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Services from "../../components/Services";

function HomePage() {
    return (
        <>
            <Header />
            <Gallery />
            <About />
            <Services />
            <ContactUs />
            <Footer />
        </>
    );
}

export default HomePage;