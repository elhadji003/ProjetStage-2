"use client";

import { useState } from "react";

export default function MugTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Product Description" },
    { id: "reviews", label: "Related Products" },
    { id: "customization", label: "Ratings and Reviews" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            placeat suscipit impedit quod quisquam commodi iusto ullam eum qui,
            officiis voluptate possimus nemo soluta, quam in! Sint animi,
            laborum repudiandae vitae sed modi consequatur inventore esse nobis
            ratione unde ab, vero numquam quibusdam corporis corrupti quisquam
            deserunt nulla non facilis.
          </p>
        );
      case "reviews":
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste
            voluptas tempora impedit quidem unde nisi. Quo molestias, magni
            impedit laboriosam eaque nisi unde dicta voluptas cumque delectus
            libero sequi provident quisquam expedita iusto odio consequuntur
            sapiente eos iure totam. Totam, iusto. Doloremque minima veritatis
            voluptates. Possimus distinctio accusamus perferendis?
          </p>
        );
      case "customization":
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            blanditiis, unde, aliquam voluptates non quis a itaque animi
            aspernatur nemo officiis similique molestiae sit incidunt inventore
            atque nisi exercitationem, qui suscipit voluptatem maiores voluptas
            ab quas? Voluptas, esse voluptatem. Error necessitatibus optio
            possimus quisquam ullam ex unde sunt maiores aspernatur!
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Tabs header */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab.id
                ? "bg-cyan-900 text-white rounded-md"
                : "text-gray-500 hover:text-cyan-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs content */}
      <div className="mt-4 text-gray-700">{renderContent()}</div>
    </div>
  );
}
