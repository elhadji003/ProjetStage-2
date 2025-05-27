// FooterStyle.jsx
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: rgba(27, 75, 102, 1);
  color: white;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      margin: 0.2rem 0;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: translateX(5px);
        font-weight: bold;
      }
    }
  }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .icons {
    display: flex;
    gap: 1rem;

    span {
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 4px;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const BottomNote = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;
