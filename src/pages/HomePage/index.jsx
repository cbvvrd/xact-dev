import About from "../../components/About";
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
            <Footer />
        </>
    );
}

export default HomePage;