import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './style.css'
const Products = () =>{
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        (async ()=>{
            await getProducts();
        })();
        getProducts();
    },[])
    const getProducts = async()=>{
        try{
            setLoading(true)
            const response = await fetch ('https://dummyjson.com/products')
        const result =await response.json();
        setProducts(result.products);
        setLoading(false)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }
    return(
        <div className="items">
            {products.map(item =>(
              
                <div key={item.id}>
                  <img src= {item.images[1]} alt ={item.title} className="product-title"/>
                  <p className="product-price">price &nbsp; &nbsp; Ksh {item.price}</p>
                  <p className="product-discount">Discount &nbsp; &nbsp; Ksh {item.discountPercentage}%</p>
                  <Link to={`/Details/${item.id}` }className="buton">
            <button type="submit" className="button">View details</button >
          </Link>
                  
                    </div>
            ))}
        </div>);
}
export default Products