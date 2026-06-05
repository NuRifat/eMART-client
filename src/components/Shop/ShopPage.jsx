import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import apiClient from '../../services/api-client';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiClient
            .get("/products")
            .then((res) => setProducts(res.data.results))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div>
            <ProductList products={products} loading={loading}/>
        </div>
    );
};

export default ShopPage;