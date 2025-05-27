// Section2.jsx
import React from "react";
import tasse1 from "../../../../public/images/tasse4.png";
import tasse2 from "../../../../public/images/tasse5.png";
import tasse3 from "../../../../public/images/tasse6.png";
import tasse4 from "../../../../public/images/tasse8.png";
import {
  Wrapper,
  Header,
  Title,
  CardsGrid,
  Card,
  CardImage,
  CardDescription,
  CardText,
} from "@/styles/Section2Style";

export default function Section2() {
  const cards = [
    {
      image: tasse1,
      desc: "Blossom Pouch",
    },
    {
      image: tasse2,
      desc: "Leather Coach Bag",
    },
    {
      image: tasse3,
      desc: "Brown Strap Bag",
    },
    {
      image: tasse4,
      desc: "Black Bag",
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>Featured Collection</Title>
      </Header>
      <CardsGrid>
        {cards.map((card, k) => (
          <Card key={k}>
            <CardImage
              src={card.image}
              alt={card.desc}
              width={280}
              height={280}
            />
            <CardDescription>
              <CardText>{card.desc}</CardText>
            </CardDescription>
          </Card>
        ))}
      </CardsGrid>
    </Wrapper>
  );
}
