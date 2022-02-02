import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material'
import ShopPagesHeader from '../../common/ShopPagesHeader'
import CollapseCheckBox from './CollapseCheckBox';
import CollapseRadio from './CollapseRadio';
import LoadMoreCards from './LoadMoreCards'
import { FaBars, FaTh } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { wood } from '../../redux/actions/woodActions'
import { brand } from '../../redux/actions/brandActions'
import { shopProducts } from '../../redux/actions/shopActions'

const Shop = () => {

    const [grid, setGrid] = useState('');
    const [limit] = useState(6);
    const [skip, setSkip] = useState(0);

    const [filterBrands, setFilterBrands] = useState([]);
    const [filterFrets, setFilterFrets] = useState([]);
    const [filterWoods, setFilterWoods] = useState([]);
    const [filterPrices, setFilterPrices] = useState([]);

    const shop = useSelector(state => state.shop);

    const allWoods = useSelector(state => state.wood);
    const allBrands = useSelector(state => state.brand);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wood())
        dispatch(brand())
    }, [dispatch]);

    useEffect(() => {
        let filters = {
            brand: filterBrands,
            frets: filterFrets,
            wood: filterWoods,
            price: filterPrices
        }
        dispatch(shopProducts(skip, limit, filters))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterBrands, filterFrets, filterWoods, filterPrices]);

    const frets = [
        { _id: 20, name: 20 },
        { _id: 21, name: 21 },
        { _id: 22, name: 22 },
        { _id: 24, name: 24 },
    ]

    const price = [
        { _id: 0, name: 'Any', array: [] },
        { _id: 1, name: '$0 to $299', array: [0, 299] },
        { _id: 2, name: '$300 to $599', array: [300, 599] },
        { _id: 3, name: '$600 to $999', array: [600, 999] },
        { _id: 4, name: '$1000 to $1999', array: [1000, 1999] },
        { _id: 5, name: 'More than $2000', array: [2000, 15000] },
    ]

    const handleFilter = (filters, category) => {
        if (category === 'brand') setFilterBrands(filters)
        else if (category === 'frets') setFilterFrets(filters)
        else if (category === 'wood') setFilterWoods(filters)
        else if (category === 'price') {
            let array = ''
            for (let key in price) {
                if (price[key]._id === filters) {
                    array = price[key].array
                }
            }
            setFilterPrices(array)
        }
        setSkip(0)
    }

    const handleLoadMoreCards = () => {
        let newSkip = skip + limit
        let filters = {
            brand: filterBrands,
            frets: filterFrets,
            wood: filterWoods,
            price: filterPrices
        }
        dispatch(shopProducts(newSkip, limit, filters, shop.products)).then(res => {
            setSkip(skip + limit)
        })
    }

    const handleGrid = () => {
        setGrid(!grid ? 'grid_bars' : '')
    }

    return (
        <Box>
            <ShopPagesHeader title='Browse Products' />
            <Container className='container'>
                <Box className='shop_wrapper'>
                    <Box className='left'>
                        <CollapseCheckBox
                            title='Brands'
                            initState={false}
                            list={allBrands.brands}
                            handleFilter={(filters) => handleFilter(filters, 'brand')}
                        />
                        <CollapseCheckBox
                            title='Frets'
                            initState={false}
                            list={frets}
                            handleFilter={(filters) => handleFilter(filters, 'frets')}
                        />
                        <CollapseCheckBox
                            title='Woods'
                            initState={false}
                            list={allWoods.woods}
                            handleFilter={(filters) => handleFilter(filters, 'wood')}
                        />
                        <CollapseRadio
                            title='Price'
                            initState={true}
                            list={price}
                            handleFilter={(filters) => handleFilter(filters, 'price')}
                        />
                    </Box>
                    <Box className='right'>
                        <Box className='shop_options'>
                            <Box className='shop_grid clear'>
                                <Box
                                    className={`grid_btn ${grid ? '' : 'active'}`}
                                    onClick={() => handleGrid()}
                                >
                                    <FaTh style={{ cursor: 'pointer' }} />
                                </Box>
                                <Box
                                    className={`grid_btn ${grid ? '' : 'active'}`}
                                    onClick={() => handleGrid()}
                                >
                                    <FaBars style={{ cursor: 'pointer' }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <LoadMoreCards
                                grid={grid}
                                limit={limit}
                                size={shop.size}
                                products={shop.products}
                                loadMore={() => handleLoadMoreCards()}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Shop;