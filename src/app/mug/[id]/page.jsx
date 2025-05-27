"use client";

import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiPlus,
  FiShoppingBag,
  FiDownloadCloud,
} from "react-icons/fi";
import Image from "next/image";
import tasseId from "../../../../public/images/tasse2.png";
import MugTabs from "@/app/components/mugs/MugTabs";
import {
  Container,
  Breadcrumb,
  BreadcrumbLink,
  Section,
  ImageWrapper,
  Thumbnail,
  Title,
  Category,
  Rating,
  Price,
  OldPrice,
  Discount,
  Button,
  QuantityInput,
  Block,
  ColorButton,
  UploadBox,
  SizeButton,
  CheckboxBlock,
  ActionButtons,
} from "@/styles/mugs/MugDetailStyle";
import { DetailsSection } from "@/styles/mugs/MugDetailStyle";
import { ButtonCheck } from "@/styles/mugs/MugDetailStyle";

export default function MugDetail({ params }) {
  const { id } = params;

  const images = [
    { image: "/images/tasse1.png" },
    { image: "/images/tasse2.png" },
    { image: "/images/tasse3.png" },
    { image: "/images/tasse4.png" },
  ];

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <FiChevronRight />
        <BreadcrumbLink href="/mugs">Mugs</BreadcrumbLink>
        <FiChevronRight />
        <span>Customize</span>
      </Breadcrumb>

      <Section>
        <ImageWrapper>
          <Image src={tasseId} alt="Mug Image" width={600} height={600} />
          <div className="thumbnails">
            <FiChevronLeft size={30} className="nav-icon" />
            {images.map((img, index) => (
              <Thumbnail key={index}>
                <Image
                  src={img.image}
                  alt={`Mug ${index + 1}`}
                  width={80}
                  height={80}
                />
              </Thumbnail>
            ))}
            <FiChevronRight size={30} className="nav-icon" />
          </div>
        </ImageWrapper>

        <DetailsSection>
          <Title>Fill me up with coffee</Title>
          <Category>Category 1</Category>
          <Rating>
            ⭐⭐⭐⭐☆ <span>(250 ratings)</span>
          </Rating>

          <Price>
            $54.69 <OldPrice>$78.66</OldPrice> <Discount>50% OFF</Discount>
          </Price>

          <ButtonCheck>
            Write Customized Tagline <span className="ms-5">Check</span>
          </ButtonCheck>

          <div className="flex items-center gap-3 mt-4">
            <h2>Quantity:</h2>
            <QuantityInput type="number" min="1" defaultValue="1" />
          </div>

          <div className="grid">
            <Block>
              <h2>Choose Mug Color</h2>
              <div className="options">
                <ColorButton color="#3b82f6" />
                <ColorButton color="#ec4899" />
                <ColorButton color="#14b8a6" />
                <ColorButton>
                  <FiPlus />
                </ColorButton>
              </div>
            </Block>

            <Block>
              <h2>Upload Your Design / Picture</h2>
              <UploadBox>
                <FiDownloadCloud size={20} />
              </UploadBox>
            </Block>

            <Block>
              <h2>Choose Mug Size</h2>
              <div className="options">
                <SizeButton>S</SizeButton>
                <SizeButton>M</SizeButton>
                <SizeButton>L</SizeButton>
                <SizeButton>XL</SizeButton>
              </div>
            </Block>

            <Block>
              <h2>Wrap Your Mug As Gift</h2>
              <CheckboxBlock>
                <input type="checkbox" /> 100RS Extra
              </CheckboxBlock>
            </Block>
          </div>

          <ActionButtons>
            <Button href="/myCard" primary>
              <FiShoppingBag /> Add to Cart
            </Button>
            <Button>
              <FiHeart /> Add to Wishlist
            </Button>
          </ActionButtons>
        </DetailsSection>
      </Section>

      <div className="tabs-section">
        <MugTabs />
      </div>
    </Container>
  );
}
