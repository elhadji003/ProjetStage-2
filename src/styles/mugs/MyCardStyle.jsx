"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  padding: 2rem;
`;

export const ProductContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 0.5rem;

  span {
    display: flex;
    gap: 1rem;
  }
`;

export const ProductLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ProductInfo = styled.span`
  display: flex;
  gap: 1rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const OrderSummary = styled.h1`
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 0.5rem;
`;

export const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 1px solid #d1d5db;
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ActionButton = styled.a`
  width: 100%;
  margin-top: 1rem;
  background-color: #0e7490;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
  text-align: center;

  &:hover {
    background-color: #155e75;
  }
`;

export const ContinueLink = styled(Link)`
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  border: 2px solid #0e7490;
  background-color: #e5e7eb;
  color: #0e7490;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background-color: #d1d5db;
  }
`;
