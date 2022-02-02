import React from 'react';
import { Box } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

const HistoryBlock = (props) => {
    return (
        <Box className='history_blocks'>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="user purchase history">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date of purchase</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Price paid</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map((product, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {moment(product.dateOfPurchase).format('MM-DD-YYYY')}
                                </TableCell>
                                <TableCell>{product.brand} {product.name}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default HistoryBlock;