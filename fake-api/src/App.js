import { useEffect, useState } from "react";
import ProductCard from "./Product-card";
import './App.css'

function App() {
  const [product, updateProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    let res = await fetch("https://fakestoreapi.com/products");
    let productList = await res.json();
    updateProduct(productList);
    console.log(productList);
  }

  if (!Array.isArray(product) || product.length === 0) {
    return <h1>React and API</h1>;
  }

  return (
    <div className="product-list">
      {product.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}

export default App;
