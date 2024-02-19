import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Page = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}

export default Page;
