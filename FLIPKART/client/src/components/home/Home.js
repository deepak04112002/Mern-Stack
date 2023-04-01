import { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/system'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide  from './MidSlide'
import MidSection from './MidSection'


const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts)

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's Top Pick" timer={false}/>
        <Slide products={products} title="Top Deals on Accesories" timer={false}/>
      </Container>
    </>
  )
}

export default Home
