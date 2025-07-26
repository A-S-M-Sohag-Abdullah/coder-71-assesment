"use client";

import { useAppDispatch } from "@/app/lib/store";
import { addToCart } from "@/app/lib/slices/cartSlice";
import { Product } from "@/app/types/product";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 transition"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
