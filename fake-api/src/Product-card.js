import './App.css'
function ProductCard({title,image,price,rating}){
    return(
        <div className="card">
            <img src={image}/>
            <p>{title}</p>
            <p>${price}</p>
            <p>{rating.rate}</p>

        </div>
    )
}

export default ProductCard;