import React from 'react'

export default function Product({info}) {
  console.log(info)
  return (
    <div>This is a product {info.message} {info.phone}</div>
  )
}
