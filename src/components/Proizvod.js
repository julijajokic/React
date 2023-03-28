function Proizvod({ image, delivery, title, info, cost }){
    return (
      <article className='product-card'>
        <div className='product-img-container'>
          <img src={image} className='product-img' alt={title} />
          <p className='product-delivery'>{delivery}</p>
        </div>
        <div className='product-info'>
          <div className='product-title'>
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className='product-footer'>
            <p>{cost} RSD</p>
          </div>
        </div>
      </article>
    )
  }
  export default Proizvod
  