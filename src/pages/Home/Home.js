import React from 'react';
import NewPost from "./NewPost/NewPost";
import Slider from "./Slider/Slider";
import Us from "./Us/Us";


const Home = () => {
    return (
        <>
            <NewPost/>
            <Slider/>
            <Us/>
        </>
    );
};

export default Home;