import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div className='main'>
            <Sidebar />
            <div className='content'>
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;