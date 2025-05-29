import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function Completed() {
  const datas = [
    {
      id: "#08834738",
      date: "Septembre 5, 2023",
      price: "218.50",
      status: "Paid",
    },
    {
      id: "#08734738",
      date: "Janvier 5, 2025",
      price: "218.50",
      status: "Paid",
    },
    {
      id: "#05834738",
      date: "Décembre 30, 2024",
      price: "218.50",
      status: "Paid",
    },
    {
      id: "#08830738",
      date: "Mai 15, 2022",
      price: "218.50",
      status: "Paid",
    },
  ];

  const [openId, setOpenId] = useState(null);
  const [activeTab, setActiveTab] = useState("Item Ordered");

  const toggleDetails = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
      setActiveTab("Item Ordered"); // reset to default tab when opening
    }
  };

  const renderTabContent = (tab) => {
    switch (tab) {
      case "Item Ordered":
        return <p>Details about the items ordered for this order.</p>;
      case "Invoices":
        return <p>Here are the invoices linked to this order.</p>;
      case "Order Shipment":
        return <p>Shipment tracking and delivery details.</p>;
      default:
        return null;
    }
  };

  return (
    <table className="table-auto w-full border-collapse">
      <thead className="border-b">
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Order ID</th>
          <th className="px-4 py-2 text-left">Date</th>
          <th className="px-4 py-2 text-left">Price</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <React.Fragment key={data.id}>
            <tr className="border-b">
              <td className="px-4 py-2 space-x-2">
                <input
                  type="checkbox"
                  onChange={() => toggleDetails(data.id)}
                  checked={openId === data.id}
                />
                {data.id}
              </td>
              <td className="px-4 py-2">{data.date}</td>
              <td className="px-4 py-2">{data.price}</td>
              <td className="px-4 py-2 text-green-500">{data.status}</td>
              <td className="px-4 py-2">
                <button onClick={() => toggleDetails(data.id)}>
                  <FiChevronRight />
                </button>
              </td>
            </tr>
            {openId === data.id && (
              <tr>
                <td colSpan={5} className="px-4 py-2 bg-gray-50">
                  <div>
                    <div className="flex space-x-4 mb-4 border-b">
                      {["Item Ordered", "Invoices", "Order Shipment"].map(
                        (tab) => (
                          <button
                            key={tab}
                            className={`py-2 px-4 ${
                              activeTab === tab
                                ? "border-b-2 border-blue-500 text-blue-600"
                                : "text-gray-600"
                            }`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>
                    <div className="text-gray-700">
                      {renderTabContent(activeTab)}
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
