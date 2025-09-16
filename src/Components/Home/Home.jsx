import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <h1 className='text-center my-10'>This is Home Page</h1>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;