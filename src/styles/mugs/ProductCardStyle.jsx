import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const ToolbarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  padding: 1rem;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 16rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.125rem;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Category = styled.p`
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
  margin-bottom: 0.5rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #facc15; /* yellow-400 */
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1.125rem;
  color: #dc2626; /* red-600 */
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  margin-left: 0.5rem;
  color: #9ca3af; /* gray-400 */
`;

export const Discount = styled.span`
  margin-left: 0.5rem;
  color: #16a34a; /* green-600 */
  font-size: 0.875rem;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 0.5rem;
`;

export const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f4f6; /* gray-100 */
  border-radius: 0.375rem;
  padding: 0.25rem;
`;
export const PageNumber = styled.span`
  margin: 0 0.5rem;
  padding: 0 1rem;
  background-color: ${({ active }) =>
    active ? "#083344" : "transparent"}; /* cyan-950 */
  color: ${({ active }) => (active ? "white" : "#0e7490")}; /* cyan-700 */
  border-radius: ${({ active }) => (active ? "0.375rem" : "none")};
  cursor: pointer;
`;

export const NextButton = styled.button`
  margin-left: 0.5rem;
  background-color: #f3f4f6; /* gray-100 */
  border: none;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5e7eb; /* gray-200 */
  }
`;
