// Section5.jsx
import React from 'react';
import bgimageLeft from '../../../../public/images/left.png';
import bgimageRight from '../../../../public/images/right.png';

import {
  Wrapper,
  Block,
  BackgroundImage,
  TextContainer,
  TitreLeft,
  TitreRight,
  DescLeft,
  DescRight,
  ArrowRight,
  ArrowLeft,
} from '@/styles/Section5Style';
import { FiArrowRight } from 'react-icons/fi';

export default function Section5() {
  return (
    <Wrapper>
      <Block>
        <BackgroundImage src={bgimageLeft} alt="background left" />
        <TextContainer>
          <TitreLeft>Lorem Ipsum</TitreLeft>
          <DescLeft>Section 1</DescLeft>
          <ArrowLeft>
            <FiArrowRight />
          </ArrowLeft>
        </TextContainer>
      </Block>
      <Block>
        <BackgroundImage src={bgimageRight} alt="background right" />
        <TextContainer>
          <TitreRight>Lorem Ipsum</TitreRight>
          <DescRight>Section 2</DescRight>
          <ArrowRight>
            <FiArrowRight />
          </ArrowRight>
        </TextContainer>
      </Block>
    </Wrapper>
  );
}
