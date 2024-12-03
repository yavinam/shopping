import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import Stars from "./Stars";
import Product_Modal from "./Product_Modal";

const API_URL = "https://fakestoreapi.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}/products`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  };

  return (
    <div className="py-10 bg-gradient-to-b from-purple-700 via-pink-500 to-orange-400 min-h-screen">
      <div className="container mx-auto px-4">
        {loading && <Skeleton count={12} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((pro) => (
            <div
              className="p-5 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              key={pro.id}
            >
              <button
                className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-200 to-orange-200"
                onClick={() => handleProductClick(pro)}
              >
                <img
                  className="w-full h-full object-contain transition-transform transform hover:scale-110"
                  src={pro.image}
                  alt={pro.title}
                  style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                />
              </button>
              <h3 className="text-lg font-semibold text-center mt-4 text-indigo-900 hover:text-pink-700 transition-colors">
                {pro.title}
              </h3>
              <div className="text-lg text-yellow-500 font-semibold py-2 flex justify-center items-center">
                <Stars rating={pro.rating.rate} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modalni chaqirish */}
      <Product_Modal
        isOpen={openProductModal}
        onClose={() => setOpenProductModal(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Product;
