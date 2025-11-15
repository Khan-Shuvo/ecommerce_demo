import React from "react";
import { IoIosStar } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

export default function ProductCard({ product }) {
    return (
        <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg overflow-hidden 
                    hover:shadow-lg hover:scale-[1.02] transition-all duration-300">

            <img
                src={product.image}
                alt="product img"
                className="w-full h-48 object-contain p-3"
            />

            <div className="px-4 pb-4">
                {/* Category */}
                <p className="text-gray-400 text-sm">{product.categoryName}</p>

                {/* Name */}
                <h3 className="font-semibold text-gray-700 text-lg leading-tight">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex text-orange-600 mt-1 text-lg">
                    {[...Array(5)].map((_, i) => (
                        <IoIosStar key={i} />
                    ))}
                </div>

                {/* Price */}
                <div className="flex items-center text-xl gap-3 mt-2">
                    <p className="flex items-center gap-1 font-semibold">
                        {product.price} <TbCurrencyTaka />
                    </p>

                    <p className="line-through text-gray-400 flex items-center gap-1 text-lg">
                        {product.mrp} <TbCurrencyTaka />
                    </p>
                </div>
            </div>
        </div>
    );
}
