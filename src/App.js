import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import {tours} from "./data"
import Kontakt from './pages/Kontakt';
import Narucivanje from './pages/Narucivanje';
import Pocetna from './pages/Pocetna';

function App() {
 const [data, setData] = useState(tours);
  const [loading, setLoading] = useState(true)


  const paginate = (products) => {
    const itemsPerPage = 6  
    const numberOfPages = Math.ceil(products.length / itemsPerPage)

    const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return products.slice(start, start + itemsPerPage)
    })

    return newProducts;
  }
  
  function fetchProducts() {
    setData(paginate(data));
    setLoading(false);
    console.log(data);
  }
  
  
  useEffect(() => {
    fetchProducts();
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Pocetna data = {data} loading={loading}/>}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
          <Route path='/narucivanje' element={<Narucivanje />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
