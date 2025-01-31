import ContactUs from "../../components/ContactUs";
import Demos from "../../components/Demos";
import DemosTitle from "../../components/DemosTitle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function DemoPage() {
    return (
        <>
            <Header />
            <DemosTitle />
            <Demos />
            <ContactUs />
            <Footer />
        </>
    );
}

export default DemoPage;