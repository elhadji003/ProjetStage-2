import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FiCreditCard } from "react-icons/fi";

export default function Accordion2() {
  const [visibleInputs, setVisibleInputs] = React.useState({});

  const paymentOptions = [
    { id: 1, name: "Easypaisa", logo: "/images/esy.png" },
    { id: 2, name: "Credit/Debit Card", icon: <FiCreditCard /> },
    { id: 3, name: "Apple Pay", logo: "/images/apple.png" },
    { id: 4, name: "Amazone", logo: "/images/amazone.png" },
  ];

  const savedCards = [
    { id: 1, name: "Visa **** 1234", logo: "/images/esy.png" },
    { id: 2, name: "JazzCash **** 5678", logo: "/images/cash.png" },
    { id: 3, name: "Google Pay **** 3214", logo: "/images/multicolors.png" },
  ];

  const handleCheckboxChange = (cardId) => {
    setVisibleInputs((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <div className="mt-6 mb-4">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="font-semibold text-cyan-900">
            Payments
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Section 1: Payment method cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {paymentOptions.map((option) => (
              <label
                key={option.id}
                className="border-2 border-cyan-900 rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-md"
              >
                <input type="checkbox" className="mb-2 ml-auto" />
                {option.logo ? (
                  <img
                    src={option.logo}
                    alt={option.name}
                    className="h-8 mb-2"
                  />
                ) : (
                  <span className="text-2xl mb-2">{option.icon}</span>
                )}
                <span className="font-medium">{option.name}</span>
              </label>
            ))}
          </div>

          {/* Section 2: Saved cards with toggle input */}
          <div className="flex flex-col gap-4">
            {savedCards.map((card) => (
              <div
                key={card.id}
                className="border rounded-lg p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={card.logo} alt={card.name} className="h-8" />
                    <span className="font-medium">{card.name}</span>
                  </div>
                  <input
                    type="checkbox"
                    className="ml-2"
                    checked={visibleInputs[card.id] || false}
                    onChange={() => handleCheckboxChange(card.id)}
                  />
                </div>

                {visibleInputs[card.id] && (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="flex-grow bg-gray-100 px-4 py-2 rounded-md outline-none max-w-md"
                    />
                    <p className="text-gray-400">
                      Send Amount on 0333122223 & Enter transaction ID
                    </p>
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="checkbox" name="check" id="check" />
                      Save this card for future use
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
