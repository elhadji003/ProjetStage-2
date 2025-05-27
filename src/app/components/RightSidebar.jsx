import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/images/tasse1.png";

export default function RightSidebar({ open, toggleDrawer }) {
  const list = (
    <Box
      sx={{
        width: 300,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
      role="presentation"
    >
      {/* Top Section - Cart Items */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={image} alt="Product" width={60} height={60} />
            <div>
              <p className="font-semibold">Coach</p>
              <p className="text-sm text-gray-500">Leather Coach Bag</p>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 mt-1 p-1 border rounded"
              />
            </div>
          </div>
          <div className="text-right">
            <button
              className="text-red-500 text-xl"
              onClick={toggleDrawer(false)}
            >
              ×
            </button>
            <p className="font-semibold">$54.69</p>
          </div>
        </div>

        <Divider />

        {/* Summary */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$100.39</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>$2.00</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>$102.39</p>
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Apply Coupon Code"
            className="w-full p-2 border rounded mb-2"
          />
          <button className="w-full bg-cyan-900 text-white py-2 rounded">
            Place Order
          </button>
          <Link
            href="/mugs"
            className="block text-center text-cyan-900 mt-2 underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {list}
    </Drawer>
  );
}
