// Section4Style.jsx
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  padding: 1rem;
  position: relative;
`;

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 1rem;
  padding: 0.5rem 3rem;

  @media (max-width: 640px) {
    top: 1rem;
    left: 0rem;
  }
`;

export const Titre = styled.h2`
  color: black;
  font-size: 1.5rem;
  margin: 0;
`;

export const Desc = styled.p`
  color: black;
  font-size: 4rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;
