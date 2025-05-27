// Section3.jsx
import React from 'react';
import logo1 from '../../../../public/images/logos/Zara_Logo 1.png';
import logo2 from '../../../../public/images/logos/D&G.png';
import logo3 from '../../../../public/images/logos/H&M-Logo 1.png';
import logo4 from '../../../../public/images/logos/channel.png';
import logo5 from '../../../../public/images/logos/Prada-Logo 1.png';
import logo6 from '../../../../public/images/logos/biba.png';

import { Wrapper, Grid, Card, LogoImage } from '@/styles/Section3Style';

export default function Section3() {
  const cards = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
    { image: logo6 },
  ];

  return (
    <Wrapper>
      <Grid>
        {cards.map((card, k) => (
          <Card key={k}>
            <LogoImage
              src={card.image}
              alt={`logo-${k}`}
              width={109}
              height={46}
            />
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}
