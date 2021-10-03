import React from 'react';
import {useHistory} from "react-router-dom"
function Product({product}) {
     const history =useHistory()
    return (
        <div className="justify-content-center">
            <div className="card shadow">
                <img className="card-img-top" src={product.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.sort_des}</p>
                    <a  className="btn btn-primary" onClick={()=>history.push(`/productdetails/${product.id}`)}>Show Details</a>

                </div>
            </div>
        </div>
    );
}

export default Product;