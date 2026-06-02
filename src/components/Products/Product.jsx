import axios from 'axios';
import { useEffect } from 'react';

const Product = () => {
    useEffect(() => {
        axios.get("https://phi-mart-gamma.vercel.app/api/v1/products/")
        .then((res) => console.log(res.data.results));
    },[]);
    return (
        <div></div>
    );
};

export default Product;