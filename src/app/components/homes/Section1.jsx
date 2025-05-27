import Link from "next/link";
import React from "react";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import tasse1 from "../../../../public/images/tasse1.png";
import tasse2 from "../../../../public/images/tasse2.png";
import tasse3 from "../../../../public/images/tasse3.png";
import tasse4 from "../../../../public/images/tasse4.png";
import {
  Wrapper,
  Header,
  Title,
  LinkWrapper,
  CardsGrid,
  Card,
  CardImage,
  CardHeader,
  CardDetails,
  Description,
} from "@/styles/Section1Style";

export default function Section1() {
  const cards = [
    {
      image: tasse1,
      nom: "Grande",
      icon: <FiHeart />,
      desc: "Blossom Pouch",
      prix: 39.49,
    },
    {
      image: tasse2,
      nom: "Coach",
      icon: <FiHeart />,
      desc: "Leather Coach Bag",
      prix: 54.69,
    },
    {
      image: tasse3,
      nom: "Remus",
      icon: <FiHeart />,
      desc: "Brown Strap Bag",
      prix: 57.0,
    },
    {
      image: tasse4,
      nom: "Boujee",
      icon: <FiHeart />,
      desc: "Black Bag",
      prix: 56.49,
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>New Arrivals</Title>
        <Link href="/mugs" passHref>
          <LinkWrapper>
            View All <FiChevronRight />
          </LinkWrapper>
        </Link>
      </Header>
      <CardsGrid>
        {cards.map((card, k) => (
          <Card key={k}>
            <CardImage src={card.image} alt="tasse" width={286} height={286} />
            <CardHeader>
              <p>{card.nom}</p>
              <p>{card.icon}</p>
            </CardHeader>
            <CardDetails>
              <Description>{card.desc}</Description>
              <p>{card.prix}</p>
            </CardDetails>
          </Card>
        ))}
      </CardsGrid>
    </Wrapper>
  );
}
