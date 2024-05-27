import React from 'react'
import Banner from '../component/home/Banner'
import Products from './Products/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const data=useLoaderData();
    console.log(data)
  return (
    <div>
      <Banner></Banner>
      <Products value={data}></Products>
    </div>
  )
}

export default Home
