"use client";

import { BreadcrumbLink } from "@/styles/mugs/MugDetailStyle";
import { Breadcrumb } from "@/styles/MugsStyle";
import { Container } from "@/styles/profile/ProfileStyle";
import React, { useState } from "react";
import { FiChevronRight, FiLogOut } from "react-icons/fi";
import InfoPerso from "../components/profile/InfoPerso";

const tabs = [
  { id: "personal", label: "Personnel Information" },
  { id: "refer", label: "Refer and Earn" },
  { id: "orders", label: "My Orders" },
  { id: "wishlist", label: "My Wishlist" },
  { id: "reviews", label: "My Reviews" },
  { id: "address", label: "My Address Book" },
  { id: "cards", label: "My Saved Cards" },
];

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState("personal");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "personal":
        return (
          <div>
            <InfoPerso />
          </div>
        );
      case "refer":
        return <div>Refer friends and earn rewards!</div>;
      case "orders":
        return <div>Your orders will be displayed here.</div>;
      case "wishlist":
        return <div>Your wishlist items.</div>;
      case "reviews":
        return <div>Your product reviews.</div>;
      case "address":
        return <div>Your saved addresses.</div>;
      case "cards":
        return <div>Your saved payment cards.</div>;
      default:
        return <div>Select a section.</div>;
    }
  };

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <FiChevronRight />
        <BreadcrumbLink href="/myCard">User Profile</BreadcrumbLink>
      </Breadcrumb>

      <div className="flex justify-between mt-4">
        <h1 className="text-4xl text-cyan-900">{selectedTab}</h1>
        <button className="flex items-center gap-2 border border-cyan-950 rounded-md px-4 py-2">
          <FiLogOut />
          Logout
        </button>
      </div>

      <div className="flex mt-6 gap-8 max-sm:flex-col">
        {/* Left side: tabs list */}
        <ul className="w-2/12 flex flex-col gap-2 max-sm:w-full">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`p-2 rounded cursor-pointer flex justify-between items-center ${
                selectedTab === tab.id
                  ? "bg-cyan-900 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label} <FiChevronRight />
            </li>
          ))}
        </ul>

        {/* Right side: tab content */}
        <div className="w-10/12 p-4 border rounded bg-white shadow max-sm:w-full">
          {renderTabContent()}
        </div>
      </div>
    </Container>
  );
}
