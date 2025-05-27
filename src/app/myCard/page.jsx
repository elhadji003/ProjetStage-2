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

export default function MyCard() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <FiChevronRight />
        <BreadcrumbLink href="/myCard">My Cart</BreadcrumbLink>
      </Breadcrumb>

      <h1 className="mt-4 text-4xl text-cyan-900 font-bold">My Cart</h1>

      <div className="flex justify-between items-start mt-8 gap-6 flex-col md:flex-row">
        {/* Product Section */}
        <ProductContainer>
          <ProductHeader>
            <h1>Product Name</h1>
            <span className="me-8">
              <p>Price</p>
              <p>Quantity</p>
              <p>SubTotal</p>
            </span>
          </ProductHeader>

          <ProductLine>
            <ProductInfo>
              <Image src={image} width={80} height={80} alt="Product" />
              <ProductDetails>
                <h1 className="font-bold">Coach</h1>
                <p>Leather Coach Bag</p>
                <p>Qty-1</p>
              </ProductDetails>
            </ProductInfo>

            <div className="flex flex-col gap-3">
              <span className="flex space-x-4">
                <p>$54.69</p>
                <p>1</p>
                <p>$54.69</p>
              </span>
              <span className="space-x-4">
                <button className="text-cyan-900 font-bold underline">
                  Move to Wishlist
                </button>
                <button className="text-red-700 font-bold underline">
                  Remove
                </button>
              </span>
            </div>
          </ProductLine>
        </ProductContainer>

        {/* Summary Section */}
        <SummaryContainer>
          <OrderSummary>Order Summary</OrderSummary>

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

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <ActionButton href="/checkout">Place Order</ActionButton>
            <ContinueLink href="/mugs">Continue Shopping</ContinueLink>
          </div>
        </SummaryContainer>
      </div>
      <Accordion />
      <button className="bg-gray-200 px-4 py-2  rounded-md">
        Apply Coupon Code <span className="text-cyan-800 ms-5">Cheek</span>
      </button>
    </Container>
  );
}
