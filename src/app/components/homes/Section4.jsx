// Section4.jsx
import React from 'react';
import bgimage from '../../../../public/images/bg1.png';

import {
  Wrapper,
  BackgroundImage,
  TextContainer,
  Titre,
  Desc,
} from '@/styles/Section4Style';

export default function Section4() {
  return (
    <Wrapper>
      <BackgroundImage src={bgimage} alt="background" />
      <TextContainer>
        <Titre>Customisable</Titre>
        <Desc>Customisable mugs from top brands</Desc>
      </TextContainer>
    </Wrapper>
  );
}
