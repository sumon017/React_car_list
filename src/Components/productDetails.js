import React,{useEffect} from 'react';
import {useParams,useHistory} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import {productsDetails} from "../Store/Action/Action";

function ProductDetails(props) {
    const {product}=useSelector(state=> state.products)
    const dispatch = useDispatch()
    const history =useHistory()
    const {id}=useParams()
    useEffect(()=>{
        dispatch(productsDetails(id))
    },[])
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <img className="card-img-top" src={product.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-info">{product.title}</h5>
                            <p className="card-text text-warning">{product.sort_des}</p>
                            <p className="card-text">{product.long_des}</p>
                            <a  className="btn btn-primary" onClick={()=>history.push(`/products`)}>Back Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;