import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Offer from '../Offer/Offer';
import OfferCard from '../OfferCard/OfferCard';
import Product from '../Product/Product';
import RecomendedProduct from '../RecomendedProduct/RecomendedProduct';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Features/>
           <OfferCard/>
           <Categories/>
           <Product/>
           <Offer/>
           <RecomendedProduct/>
        </div>
    );
};

export default Home;