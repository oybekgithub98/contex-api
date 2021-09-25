import React from 'react';
import { useStateValue} from './StateProvider';
import './Product.css';

function Product() {
    const [dark, dispatch] = useStateValue();
    console.log(dark)
    return (
        <div  className={!dark.dark ? "product" : "light"}>
            
        </div>
    )
}

export default Product
