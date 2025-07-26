"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/lib/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/app/lib/slices/cartSlice";

export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen py-10 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-sm flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  Price: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-200 text-gray-800 px-2 rounded hover:bg-gray-300"
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-gray-200 text-gray-800 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="font-semibold text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white text-sm mt-2 px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
