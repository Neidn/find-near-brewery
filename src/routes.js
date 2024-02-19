import {Route, Routes, BrowserRouter} from "react-router-dom";

import {DEFAULT_URL} from "./lib/path";
import HomePage from "./pages/home/HomePage";
import Error404 from "./pages/errors/Error404";
import Page from "./pages/Page";

const CustomPage = (props) => {
    return (
        <Page>
            {props.children}
        </Page>
    );
}

const CustomRouter = (props) => {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route
                        path={DEFAULT_URL}
                        element={<CustomPage><HomePage {...props} /></CustomPage>}
                    />
                    <Route
                        path={"*"}
                        element={<Error404 {...props} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default CustomRouter;
