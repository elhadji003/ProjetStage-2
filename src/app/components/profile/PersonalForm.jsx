import React from "react";

export default function PersonalForm({
  firstName,
  lastName,
  email,
  phonePrefix,
  phoneNumber,
  birthday,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhonePrefixChange,
  onPhoneNumberChange,
  onBirthdayChange,
  onSubmit,
  saving,
}) {
  return (
    <form className="space-y-4 mb-10" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Prénom</label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChange}
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Nom</label>
          <input
            type="text"
            value={lastName}
            onChange={onLastNameChange}
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
        />
      </div>

      <div className="flex gap-2 max-sm:flex-col">
        <select
          value={phonePrefix}
          onChange={onPhonePrefixChange}
          className="border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
        >
          <option value="+221">+221</option>
          <option value="+33">+33</option>
        </select>
        <input
          type="text"
          value={phoneNumber}
          onChange={onPhoneNumberChange}
          className="flex-grow border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
          placeholder="Numéro de téléphone"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Date de naissance</label>
        <input
          type="date"
          value={birthday}
          onChange={onBirthdayChange}
          className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800 disabled:opacity-50"
        >
          {saving ? "Sauvegarde..." : "Enregistrer les modifications"}
        </button>
      </div>
    </form>
  );
}
