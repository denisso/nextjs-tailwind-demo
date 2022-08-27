import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    React.useEffect(() => {
        console.log("render");
    }, []);

    return <div className="container w-[600px] mx-auto bg-slate-600 h-[100vh]"></div>;
};

export default Home;
