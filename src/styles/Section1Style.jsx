import Image from "next/image";
import styled from "styled-components";


export const Wrapper = styled.div`
  padding: 1.25rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.875rem;
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  color: #14b8a6;
  cursor: pointer;
`;

export const CardsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled(Image)`
  border-radius: 0.375rem;
  object-fit: contain;
`;

export const CardHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const CardDetails = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const Description = styled.p`
  color: #6b7280;
`;