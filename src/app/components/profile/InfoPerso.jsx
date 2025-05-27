import React from "react";
import { FiEye, FiTrash, FiUpload } from "react-icons/fi";

export default function InfoPerso() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6 max-sm:flex-col">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          Profile
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-900 text-white rounded">
            <FiUpload /> Upload
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded">
            <FiTrash /> Delete
          </button>
        </div>
      </div>

      {/* Info Form */}
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
        </div>

        <div className="flex gap-2 max-sm:flex-col">
          <select className="border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900">
            <option value="sn">+221</option>
            <option value="fr">+33</option>
          </select>
          <input
            type="text"
            className="flex-grow border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
            placeholder="Phone number"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Date of Birth</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
        </div>
      </form>

      {/* Password Form */}
      <form className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold mb-2">Password</h2>

        <div>
          <label className="block text-sm mb-1">Current Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">New Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
          <FiEye className="absolute right-3 top-10 text-gray-500 cursor-pointer" />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
          <FiEye className="absolute right-3 top-10 text-gray-500 cursor-pointer" />
        </div>

        <div className="text-right">
          <button className="px-6 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
