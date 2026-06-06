import { useState } from 'react';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProduct from '../../hooks/useFetchProducts';

const ShopPage = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const {products, loading, totalPages} = useFetchProduct(currentPage);

    // useEffect(() => {
    //     fetchProducts();
    // },[currentPage]);

    // const fetchProducts = () => {
    //     setLoading(true);
    //     apiClient
    //         .get(`/products/?page=${currentPage}`)
    //         .then((res) => {
    //             setProducts(res.data.results);
    //             setTotalPages(Math.ceil(res.data.count / res.data.results.length));
    //         })
    //         .catch((error) => console.log(error))
    //         .finally(() => setLoading(false));
    // }; // this one is not an ideal way, below is the good way
    // const fetchProducts = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await apiClient.get(`/products/?page=${currentPage}`);
    //         const data = await response.data;

    //         setProducts(data.results);
    //         setTotalPages(Math.ceil(data.count / data.results.length));
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }; // even this one is not good, better way is to use a custom hook useFetchProduct


    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <ProductList products={products} loading={loading}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
        </div>
    );
};

export default ShopPage;