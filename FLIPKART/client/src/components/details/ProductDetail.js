/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography,styled, Table, TableBody, TableRow, TableCell } from "@mui/material"
import {LocalOffer as Badge} from '@mui/icons-material';


const SmallText=styled(Box)`
font-size: 14px;
vertical-align: baseline;
& > p{
    font-size: 14px;
    margin-top: 10px;
}
`
const StyleBadge=styled(Badge)`
   margin-right: 10px;
   color: #00CC00;
   font-size: 15px;
`
const ColumnText=styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`
const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                10 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyleBadge/>Purchase now & get 1 surprise cashback coupon till November 2023 Know More</Typography>
                <Typography><StyleBadge/>10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above T&C</Typography>
                <Typography><StyleBadge/>10% instant discount on SBI Mastercard Debit Cards, up to ₹750, on orders of ₹2,500 and above T&C</Typography>
                <Typography><StyleBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyleBadge/>Buy this Product and Get Extra ₹500 Off on Bikes & Scooters T&C</Typography>
                <Typography><StyleBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* Know More</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color:'#2874f0'}}>SupercomNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                             <img src={adURL} style={{width:390}} alt='flipkartpoints'/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail