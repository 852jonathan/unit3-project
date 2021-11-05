import React from 'react'
import { Link } from 'react-router-dom'
import CompCarousel from '@/components/Carousel'

const ProductShow = () => (
  <div id="product-show" className="productContainer">
    <header className="text-center border-bottom">
      <h1>Product Show</h1>
      <div><Link to="/ProductIndex">Product Index</Link></div>
    </header>
    <CompCarousel />

  </div>
)

export default ProductShow
