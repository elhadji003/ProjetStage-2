"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import {
  Wrapper,
  Breadcrumb,
  Content,
  BgImage,
  BgImageContent,
} from "@/styles/MugsStyle";
import Image from "next/image";
import bgimage2 from "../../../public/images/bg2.png";
import FilterSidebar from "../components/mugs/FilterSidebar";
import ProductCard from "../components/mugs/ProductCard";

export default function MugsCategory() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColors] = useState(null);

  // Détermine le padding selon la taille sélectionnée
  const getSize = () => {
    switch (selectedSize) {
      case "Small":
        return "text-sm"; // 0.5rem
      case "Medium":
        return "text-2xl"; // 1rem
      case "Large":
        return "text-4xl"; // 2rem
      default:
        return "p-2"; // valeur par défaut
    }
  };

  const getColor = () => {
    switch (selectedColor) {
      case "Blue":
        return "text-blue-500";
      case "Grey":
        return "text-gray-500";
      case "Pink":
        return "text-pink-500";
      case "Teal":
        return "text-teal-500";
      case "Teal":
        return "text-teal-500";
      case "White":
        return "text-white";
      case "Orange":
        return "text-orange-500";
      default:
        return "text-black";
    }
  };

  return (
    <Wrapper>
      <BgImage>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <Image
          src={bgimage2}
          alt="image"
          style={{ objectFit: "cover", zIndex: 0 }}
        />

        <BgImageContent>
          <h1>UPTO 70% OFF</h1>
          <p className="text-nowrap">BLACK FRIDAY</p>
        </BgImageContent>
      </BgImage>
      <Breadcrumb>
        <Link href="/home">
          Home <FiChevronRight />
        </Link>
        <Link href="/mugs" className="text-cyan-800">
          Mugs
        </Link>
      </Breadcrumb>

      <Content>
        <h1 className="text-cyan-900">Category 1</h1>
        <div className="flex gap-3 max-sm:flex-col">
          <div className="w-3/12 max-sm:w-full">
            <FilterSidebar
              onSizeChange={setSelectedSize}
              onChangeColor={setSelectedColors}
            />
          </div>
          <div className={`w-9/12 max-sm:w-full ${getSize()} ${getColor()}`}>
            <ProductCard />
          </div>
        </div>
      </Content>
    </Wrapper>
  );
}
