import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Accordion1() {
  return (
    <div className="mt-6 mb-4 ">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="font-semibold text-cyan-900">
            Add New Address
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="outline-none bg-gray-100 px-4 py-2 rounded-md"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                className="outline-none bg-gray-100 px-4 py-2 rounded-md"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                className="outline-none bg-gray-100 px-4 py-2 rounded-md"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                className="outline-none bg-gray-100 px-4 py-2 rounded-md"
                placeholder="Your state"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                className="outline-none bg-gray-100 px-4 py-2 rounded-md"
                placeholder="Enter your city"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Pin Code
              </label>
              <input
                type="text"
                className="outline-none bg-gray-100 px-4 py-2 rounded-md"
                placeholder="Enter your Pin Code"
              />
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
