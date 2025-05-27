// Section3Style.jsx
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div``;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.75rem;
  margin-left: 0.5rem;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 0.375rem; /* rounded-md */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #d1d5db; /* bg-gray-300 */
  width: 11rem; /* w-44 */
  height: 11rem; /* h-44 */
`;

export const LogoImage = styled(Image)`
  object-fit: cover;
`;
