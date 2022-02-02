import React, { useEffect } from "react";
import { Box } from '@mui/material';
import HomeSlider from "./HomeSlider";
import HomePromotion from "./HomePromotion";
import CardBlock from "./CardBlock";
import { useDispatch, useSelector } from 'react-redux'
import { productsByArrival, productsBySell } from '../../redux/actions/productActions'

const Home = () => {

    const productBySell = useSelector(state => state.product);
    const productByArrival = useSelector(state => state.product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsBySell())
        dispatch(productsByArrival())
    }, [dispatch]);

    return (
        <Box>
            <HomeSlider />
            <CardBlock list={productBySell?.bySell} title='Best Selling Guitars' />
            <HomePromotion />
            <CardBlock list={productByArrival?.byArrival} title='New Arrivals' />
        </Box>
    );
}

export default Home;