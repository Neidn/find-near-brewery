import Header from "../components/header/Header";

const Page = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
}

export default Page;
