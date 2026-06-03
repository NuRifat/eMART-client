import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductItem from "./ProductItem";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../Services/api-client";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className="mx-auto py-16 bg-gray-50">
      <div className="flex justify-between items-center mb-4 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Trending Product</h2>
        <a
          href="#"
          className="btn btn-secondary px-6 py-6 rounded-full text-lg"
        >
          View All
        </a>
      </div>
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
      )}

      {/* error message set */}
      {error && <ErrorAlert error={error} />}

      {!isLoading && !error && products.length > 0 && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerview={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <ProductItem key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isLoading && !error && products.length === 0 && (
        <p>No Products available</p>
      )}
    </section>
  );
};

export default Product;
