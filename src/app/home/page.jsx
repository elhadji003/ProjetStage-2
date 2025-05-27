"use client";

import React from "react";
import HeaderHome from "../components/homes/HeaderHome";
import Section1 from "../components/homes/Section1";
import Section2 from "../components/homes/Section2";
import Section3 from "../components/homes/Section3";
import Section4 from "../components/homes/Section4";
import Section5 from "../components/homes/Section5";

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
