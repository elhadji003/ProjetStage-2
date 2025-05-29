"use client";

import styled from "styled-components";
import { theme } from "../app/components/colors";

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${(props) => (props.$isScroll ? "black" : "white")};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  a {
    display: flex;
    align-items: center;
    color: #000;
    font-size: 18px;

    &:hover {
      color: #3b82f6;
    }
  }
`;

export const Input = styled.input`
  background: ${theme.colors.grey};
  width: 300px;
  border-radius: 4px;
  padding: 5px;
  outline: none;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 200px;
  }
`;

export const InputMobile = styled.input`
  background: ${theme.colors.grey};
  width: 250px;
  border-radius: 4px;
  padding: 5px;
  outline: none;

  @media (min-width: ${breakpoints.md}) {
    width: 200px;
  }
`;

export const MenuOpen = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 2.5rem;
  border-radius: 0 0 8px 8px;
  z-index: 10;
  list-style: none;
  text-align: left;

  li a {
    color: #000;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      color: #3b82f6;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
