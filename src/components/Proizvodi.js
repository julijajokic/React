import Proizvod from './Proizvod'
function Proizvodi({products}){
  return (
    <section className='section' id='products'>
      <div className='section-title'>
        <h2>
            najpopularniji <span>proizvodi</span>
        </h2>
    </div>

      <div className='section-center featured-center'>
        {products.map((product) => {
          return <Proizvod {...product} key={product.id} />
        })}
      </div>
    </section>
  )
}
export default Proizvodi;
