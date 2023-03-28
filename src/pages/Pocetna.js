import Proizvodi from "../components/Proizvodi"
import { useState,useEffect } from "react";
function Pocetna({data, loading}){
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([]);

    
   useEffect(() => {
        if(loading) return
        setProducts(data[page]);
        console.log(products);
    }, [loading ,page])
    
    //F-je za sledecu i prethodnu stranicu
    
    const nextPage = () => {
        setPage((oldPage) => {
          let nextPage = oldPage + 1
          if (nextPage > data.length - 1) {
            nextPage = 0
          }
          return nextPage
        })
      }
    
    
      const prevPage = () => {
        setPage((oldPage) => {
          let prevPage = oldPage - 1
          if (prevPage < 0) {
            prevPage = data.length - 1
          }
          return prevPage
        })
      }
    
    //F-ja za trenutnu stranicu
      const handlePage = (index) => {
        setPage(index)
      }
    
    return( 
        <main>
        {/* Proizvodi */}
        <div className='container'>            
              <Proizvodi products = {products}/>
        </div>
        {/* Paginacija*/} 
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              pret.
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              sled.
            </button>
          </div>
        )}
      
      </main>

    )




}

export default Pocetna;