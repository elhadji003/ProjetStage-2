// Section5Style.jsx
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Block = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: 250px;
  display: block;
  border-radius: 1rem;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TitreLeft = styled.h2`
  color: rgba(165, 63, 100, 1);
  font-size: 3rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const DescLeft = styled.p`
  color: rgba(165, 63, 100, 1);
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const ArrowLeft = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  background: rgba(165, 63, 100, 1);
  width: fit-content;
  padding: 0.6rem;
  border-radius: 100%;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const TitreRight = styled.h2`
  color: rgba(27, 75, 102, 1);
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const DescRight = styled.p`
  color: rgba(27, 75, 102, 1);
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const ArrowRight = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  background: rgba(27, 75, 102, 1);
  width: fit-content;
  padding: 0.6rem;
  border-radius: 100%;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;
