// Footer.jsx
"use client";
import React from "react";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

import {
  FooterWrapper,
  LeftSection,
  SocialSection,
  BottomNote,
} from "@/styles/FooterStyle";

export default function Footer() {
  return (
    <FooterWrapper>
      <LeftSection>
        <div>
          <h1>Shop by category</h1>
          <p>
            <FiArrowRight /> Tasse
          </p>
          <p>
            <FiArrowRight /> Bouteille
          </p>
          <p>
            <FiArrowRight /> Beauty
          </p>
          <p>
            <FiArrowRight /> Accessoires
          </p>
          <p>
            <FiArrowRight /> Décoration
          </p>
          <p>
            <FiArrowRight /> Cadeaux
          </p>
        </div>
        <div>
          <h1>About</h1>
          <p>
            <FiArrowRight /> Notre histoire
          </p>
          <p>
            <FiArrowRight /> Équipe
          </p>
          <p>
            <FiArrowRight /> Carrières
          </p>
          <p>
            <FiArrowRight /> Presse
          </p>
          <p>
            <FiArrowRight /> Blog
          </p>
          <p>
            <FiArrowRight /> Partenaires
          </p>
        </div>
        <div>
          <h1>Policy</h1>
          <p>
            <FiArrowRight /> Conditions
          </p>
          <p>
            <FiArrowRight /> Confidentialité
          </p>
          <p>
            <FiArrowRight /> Retours
          </p>
          <p>
            <FiArrowRight /> Expéditions
          </p>
          <p>
            <FiArrowRight /> Paiements
          </p>
          <p>
            <FiArrowRight /> Aide
          </p>
        </div>
      </LeftSection>

      <SocialSection>
        <div className="icons">
          <span>
            <FiFacebook />
          </span>
          <span>
            <FiInstagram />
          </span>
          <span>
            <FiTwitter />
          </span>
          <span>
            <FiYoutube />
          </span>
          <span>
            <SiTiktok />
          </span>
        </div>
        <BottomNote>
          <FaMapMarkerAlt /> United States &nbsp; | &nbsp; ©2025 Piod.bakeli
        </BottomNote>
      </SocialSection>
    </FooterWrapper>
  );
}
