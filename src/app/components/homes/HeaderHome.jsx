import {
  BgImage,
  BgImageContent,
  Container,
  TitleHeader,
} from "@/styles/HomeStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgImage from "../../../../public/images/header.jpg";

export default function HeaderHome() {
  return (
    <Container>
      <TitleHeader>
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status{" "}
        <Link className="text-blue-600 underline" href="#">
          here
        </Link>
      </TitleHeader>
      <BgImage>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <Image
          src={bgImage}
          alt="image"
          //   fill
          style={{ objectFit: "cover", zIndex: 0 }}
        />

        <BgImageContent>
          <h1>BLACK FRIDAY</h1>
          <p>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button>See All Products</button>
        </BgImageContent>
      </BgImage>
    </Container>
  );
}
