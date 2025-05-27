"use client";

import {
  Container,
  SummaryContainer,
  ProductContainer,
  ProductHeader,
  ProductLine,
  ProductInfo,
  ProductDetails,
  OrderSummary,
  OrderRow,
  SummaryTotal,
  ActionButton,
  ContinueLink,
} from "@/styles/mugs/MyCardStyle";

import { Breadcrumb, BreadcrumbLink } from "@/styles/mugs/MugDetailStyle";

import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import image from "../../../public/images/tasse2.png";
import Accordion from "../components/cheekout/Accordion";
import Accordion2 from "../components/cheekout/Accordion2";

export default function Checkout() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <FiChevronRight />
        <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
      </Breadcrumb>

      <h1 className="mt-4 text-4xl text-cyan-900 font-bold">Checkout</h1>

      <div className="flex justify-between items-start mt-8 gap-6 flex-col md:flex-row">
        {/* Product Section */}
        <div className="w-7/12 max-sm:w-full">
          <Accordion />
          <Accordion2 />
          <div className="flex justify-between items-center mt-8">
            <Link href="/mugs" className="text-cyan-950 underline font-bold">
              Back to Cart
            </Link>
            <Link
              href="/profile"
              className="bg-cyan-900 px-4 py-2 text-white rounded-lg"
            >
              NEXT
            </Link>
          </div>
        </div>

        {/* Summary Section */}
        <SummaryContainer>
          <OrderSummary>Order Summary</OrderSummary>

          <ProductInfo className="p-4">
            <Image src={image} width={80} height={80} alt="Product" />
            <ProductDetails>
              <h1 className="font-bold">Coach</h1>
              <p>Leather Coach Bag</p>
              <p>Qty-1</p>
            </ProductDetails>
          </ProductInfo>
          <ProductInfo className="p-4">
            <Image src={image} width={80} height={80} alt="Product" />
            <ProductDetails>
              <h1 className="font-bold">Coach</h1>
              <p>Leather Coach Bag</p>
              <p>Qty-1</p>
            </ProductDetails>
          </ProductInfo>

          <OrderSummary>Order Details</OrderSummary>

          <OrderRow>
            <h1 className="text-xl">Subtotal</h1>
            <p className="text-xl">$119.69</p>
          </OrderRow>
          <OrderRow>
            <h1 className="text-xl">Discount</h1>
            <p className="text-xl">-$13.40</p>
          </OrderRow>
          <OrderRow>
            <h1 className="text-xl">Delivery Fee</h1>
            <p className="text-xl">$0.00</p>
          </OrderRow>
          <SummaryTotal>
            <h1>Grand Total</h1>
            <p>$106.29</p>
          </SummaryTotal>
        </SummaryContainer>
      </div>
    </Container>
  );
}
