import React from "react";
import {
    Navbar,
    Typography,
} from "@material-tailwind/react";

const Footer = () => {

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 my-2">
            <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
                <Typography className="mr-4 py-1.5 font-bold text-2xl">
                    Find near brewery for you
                </Typography>
            </div>
        </Navbar>
    );
}

export default Footer;
