"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/services/authService";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        firstName,
        lastName,
        email,
        password,
      };

      const response = await register(formData);
      console.log("Inscription réussie :", response.data);

      alert("Compte créé avec succès !");
      router.replace("/home");
    } catch (err) {
      console.error(err);
      alert("Une erreur s'est produite lors de l'inscription");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center mt-[0px]">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Créer un compte</h1>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="exemple@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre mot de passe"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-950 text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-cyan-600 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
