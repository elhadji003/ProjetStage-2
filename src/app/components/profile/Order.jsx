import React, { useState } from "react";
import Completed from "./Completed";

export default function Order() {
  const [selectedTab, setSelectedTab] = useState("completed");

  const Tabs = [
    { id: "completed", label: "Completed" },
    { id: "processing", label: "Processing" },
    { id: "cancelled", label: "Cancelled" },
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "completed":
        return <Completed />;
      case "processing":
        return (
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            dolore quam nam cupiditate sunt, doloribus laudantium sequi, fugit
            pariatur illo quia officia culpa ducimus numquam error labore nemo.
            Totam, nisi.
          </div>
        );
      case "cancelled":
        return (
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            dolore quam nam cupiditate sunt, doloribus laudantium sequi, fugit
            pariatur illo quia officia culpa ducimus numquam error labore nemo.
            Totam, nisi. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Inventore officiis nostrum quidem quis. Soluta doloremque
            voluptatum non tenetur ullam, commodi suscipit, quasi aut dicta
            alias iusto. Vel nam excepturi repellat?
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex bg-gray-100 p-2">
        {Tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-2 rounded-md cursor-pointer flex justify-between items-center ${
              selectedTab === tab.id
                ? "bg-cyan-900 text-white"
                : "bg-gray-100 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
}
