import React from 'react'
import Product from '../Product/Product'

export default function Products({info}) {
  return (
    <div>
      <h3>I am from Products {}</h3>
      <Product info={info}></Product>
    </div>
  )
}
