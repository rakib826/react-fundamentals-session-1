import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'

function App() {
  const information = {
    message: "Secret",
    phone: "01532475623"
  }

  return (
    <>
      <h2>Vite + React</h2>
      <Products info={information}></Products>
    </>
  )
}

export default App
