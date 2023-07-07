
export default function DisplayResultList({ display }) {

    return (
        <div className="dropdown">
           { display.map((product,id) => {
       return (
        <div className="resultList" key={id} >
       {/* <DisplayResult product={product} key={id} /> */}
       <div className='display'>
    <div>
      <img className='image' src={product.image[0].link} alt={product.name}/>
      </div>
   <div className='name' >   
       {product.name}  
    </div>
    </div>
        </div>
       );
            })}
           
        </div>
    );
}