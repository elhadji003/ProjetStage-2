// MugsCategoryStyle.jsx
import styled from "styled-components";
import { breakpoints } from "./NavbarStyle";

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const BgImage = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 2rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${breakpoints.sm}) {
    border-radius: 1rem;
    height: 200px;
    mlin-height: 200px;
  }
`;

export const BgImageContent = styled.div`
  position: absolute;
  z-index: 20;
  padding: 0 1rem;
  top: 50%;
  right: -10%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font-size: 5.25rem;
    font-weight: bold;
    white-space: nowrap;
  }

  p {
    font-size: 5.25rem;
    margin-top: 0.5rem;
    max-width: 500px;
  }

  @media (max-width: ${breakpoints.sm}) {
    scale: 0.7;
    transform: translate(0%, -60%);

    h1 {
      font-size: 1.25rem;
      font-weight: bold;
      white-space: nowrap;
    }

    p {
      font-size: 2.25rem;
      font-weight: bold;
      margin-top: 0.5rem;
      max-width: 500px;
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

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.9rem;
    // color: #0070f3;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #0051a3;
    }
  }
`;

export const Content = styled.p`
  margin-top: 1rem;
  line-height: 1.6;
  color: #333;
  font-size: 0.95rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
