import React, {useEffect} from 'react';
import Product from "./product";
import {loadproducts,} from "../Store/Action/Action";
import {useDispatch, useSelector} from "react-redux";

function ProductList(props) {
    const {products} = useSelector(state => state.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadproducts())
    }, [])

    return (
        <div className="container">
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-lg-6 py-2">
                        <Product key={index} product={product}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;