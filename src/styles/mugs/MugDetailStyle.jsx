import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  padding: 2rem;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  margin-bottom: 1.5rem;

  span {
    color: #0e7490;
    font-weight: light;
  }
`;

export const BreadcrumbLink = styled(Link)`
  font-weight: light;
  &:hover {
    color: #0e7490;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  .thumbnails {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-icon {
    cursor: pointer;
  }
`;

export const Thumbnail = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const DetailsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Category = styled.p`
  color: #6b7280;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0e7490;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  margin-left: 0.5rem;
  color: #9ca3af;
`;

export const Discount = styled.span`
  margin-left: 0.5rem;
  color: #ef4444;
  font-size: 0.875rem;
`;
export const ButtonCheck = styled.button`
  bground: red;
  width: fit-content;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  text-align: start;
`;

export const Button = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;

  ${({ primary }) =>
    primary
      ? `
    background: #0e7490;
    color: white;
    &:hover {
      background: #155e75;
    }
  `
      : `
    background: #f3f4f6;
    color: #0e7490;
    border: 1px solid #0e7490;
    &:hover {
      background: #e0f2fe;
    }
  `}

  span {
    color: #0e7490;
  }
`;

export const QuantityInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.25rem 0.75rem;
  width: 5rem;
`;

export const Block = styled.div`
  border: 1px solid #0f172a;
  padding: 1rem;
  border-radius: 0.5rem;

  h2 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .options {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

export const ColorButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: ${({ color }) => color || "#e5e7eb"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadBox = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SizeButton = styled.button`
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;
