import React from 'react';

import "tailwindcss/tailwind.css";

import CustomRouter from "./routes";


function App() {
    document.title = process.env.REACT_APP_TITLE;
    document.description = process.env.REACT_APP_DESCRIPTION;

    return (

        <CustomRouter/>
    );
}

export default App;
