"use client";

import React from "react";
import { FiGrid, FiHeart } from "react-icons/fi";
import Image from "next/image";
import tasses from "../../../../public/images/tasse1.png";
import {
  Container,
  Toolbar,
  ToolbarSection,
  Grid,
  Card,
  ImageWrapper,
  TitleRow,
  Title,
  Category,
  Rating,
  PriceRow,
  Price,
  OldPrice,
  Discount,
  Pagination,
  PaginationBox,
  PageNumber,
  NextButton,
} from "@/styles/mugs/ProductCardStyle";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Container>
      {/* Toolbar */}
      <Toolbar>
        <ToolbarSection>
          <FiGrid size={20} color="#4b5563" />
          <FiGrid size={20} color="#4b5563" />
          <span>Showing 1 - 40 of 125 items</span>
        </ToolbarSection>
        <ToolbarSection>
          <span>
            To Show:{" "}
            <span style={{ background: "#f3f4f6", padding: "0.5rem 1rem" }}>
              9
            </span>
          </span>
          <span>
            Short by position:{" "}
            <select
              style={{
                marginLeft: "0.5rem",
                background: "#f3f4f6",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                outline: "none",
              }}
            >
              <option>Position</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </span>
        </ToolbarSection>
      </Toolbar>

      {/* PRODUCT GRID */}
      <Grid>
        {[...Array(6)].map((_, i) => (
          <Link key={i} href={`/mug/${i + 1}`}>
            <Card>
              <ImageWrapper>
                <Image
                  src={tasses}
                  alt="Mug"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ImageWrapper>

              <TitleRow>
                <Title>Elegant Mug</Title>
                <button style={{ color: "#9ca3af" }}>
                  <FiHeart size={20} />
                </button>
              </TitleRow>
              <Category>Kitchenware</Category>
              <Rating>
                <span>⭐⭐⭐⭐☆</span>
                <span style={{ marginLeft: "0.5rem", color: "#6b7280" }}>
                  (43)
                </span>
              </Rating>
              <PriceRow>
                <Price>$39.49</Price>
                <OldPrice>$78.66</OldPrice>
                <Discount>50% OFF</Discount>
              </PriceRow>
            </Card>
          </Link>
        ))}
      </Grid>

      <Pagination>
        <PaginationBox>
          <PageNumber active>1</PageNumber>
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
          <PageNumber>4</PageNumber>
          <PageNumber>5</PageNumber>
        </PaginationBox>
        <NextButton>NEXT</NextButton>
      </Pagination>
    </Container>
  );
}
