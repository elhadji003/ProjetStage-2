"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FilterSidebar({ onSizeChange, onChangeColor }) {
  const [showSize, setShowSize] = useState(true);
  const [showColor, setShowColor] = useState(false);

  const sizes = ["Small", "Medium", "Large"];
  const colors = ["Blue", "Grey", "Pink", "Teal", "White", "Orange"];

  const handleSizeChange = (size) => {
    onSizeChange(size);
  };

  const handleChangeColor = (color) => {
    onChangeColor(color);
  };

  return (
    <div className="w-full">
      {/* SIZE SECTION */}
      <div className="mb-4 border-b border-gray-200">
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 hover:shadow-md"
          onClick={() => setShowSize(!showSize)}
        >
          <p className="font-semibold">Size</p>
          {showSize ? <FiMinus /> : <FiPlus />}
        </div>
        {showSize && (
          <div className="mt-2 ms-2">
            {sizes.map((size, i) => (
              <div key={i} className="flex items-center mb-1">
                <input
                  type="radio"
                  id={`size-${i}`}
                  name="size"
                  className="mr-2"
                  onChange={() => handleSizeChange(size)}
                />
                <label htmlFor={`size-${i}`}>{size}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4 border-b border-gray-200">
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 hover:shadow-md"
          onClick={() => setShowColor(!showColor)}
        >
          <p className="font-semibold">Color</p>
          {showColor ? <FiMinus /> : <FiPlus  className="cursor-pointer"/>}
        </div>
        {showColor && (
          <div className="mt-2 ms-2">
            {colors.map((color, i) => (
              <div key={i} className="flex items-center mb-1">
                <input
                  type="radio"
                  id={`color-${i}`}
                  name="color"
                  className="mr-2"
                  onChange={() => handleChangeColor(color)}
                />
                <label htmlFor={`color-${i}`}>{color}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
