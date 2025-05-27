"use client";

import { theme } from "@/app/components/colors";
import styled from "styled-components";
import { breakpoints } from "./NavbarStyle";

export const Container = styled.div`
`;
export const TitleHeader = styled.p`
  background: ${theme.colors.grey};
  text-align: center;
  padding: 8px;
`;
export const BgImage = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const BgImageContent = styled.div`
  position: absolute;
  z-index: 20;
  color: white;
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font-size: 5.25rem;
    font-weight: bold;
    white-space: nowrap;
  }

  p {
    margin-top: 0.5rem;
    max-width: 500px;
  }

  button {
    margin-top: 1rem;
    background-color: white;
    color: rgba(27, 75, 102, 1);
    padding: 1rem 5rem;
    border-radius: 0.375rem;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f1f5f9;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    scale: 0.7;
    transform: translate(-70%, -70%);

    h1 {
      font-size: 2.25rem;
      font-weight: bold;
      white-space: nowrap;
    }

    button {
      margin-top: 1rem;
      background-color: white;
      color: rgba(27, 75, 102, 1);
      padding: 0.5rem 2.9rem;
      border-radius: 0.375rem;
      border: none;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f1f5f9;
      }
    }
  }
`;
