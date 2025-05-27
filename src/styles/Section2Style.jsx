// Section2Style.jsx
import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  background-color: rgba(27, 75, 102, 1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem; /* p-2 */
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.875rem; /* text-3xl */
  color: white;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem; /* gap-4 */
  padding: 1rem; /* p-4 */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 0.375rem; /* rounded-md */
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardDescription = styled.span`
  position: absolute;
  bottom: 0.5rem; /* bottom-2 */
  left: 0.5rem; /* left-2 */
  background: rgba(255, 255, 255, 0.8);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const CardText = styled.p`
  font-weight: bold;
  font-size: 0.875rem; /* text-sm */
`;
