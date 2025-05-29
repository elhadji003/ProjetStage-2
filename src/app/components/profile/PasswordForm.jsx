import React from "react";
import { FiEye } from "react-icons/fi";

export default function PasswordForm({
  currentPassword,
  newPassword,
  confirmPassword,
  showNewPassword,
  showConfirmPassword,
  onCurrentPasswordChange,
  onNewPasswordChange,
  onConfirmPasswordChange,
  onToggleNewPassword,
  onToggleConfirmPassword,
  onSubmit,
  saving,
}) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <h2 className="text-xl font-semibold mb-2">Changer le mot de passe</h2>

      <div>
        <label className="block text-sm mb-1">Mot de passe actuel</label>
        <input
          type="password"
          value={currentPassword}
          onChange={onCurrentPasswordChange}
          className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
        />
      </div>

      <div className="relative">
        <label className="block text-sm mb-1">Nouveau mot de passe</label>
        <input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={onNewPasswordChange}
          className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
        />
        <FiEye
          onClick={onToggleNewPassword}
          className="absolute right-3 top-10 text-gray-500 cursor-pointer"
        />
      </div>

      <div className="relative">
        <label className="block text-sm mb-1">Confirmer le mot de passe</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-cyan-900"
        />
        <FiEye
          onClick={onToggleConfirmPassword}
          className="absolute right-3 top-10 text-gray-500 cursor-pointer"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800 disabled:opacity-50"
        >
          {saving ? "Sauvegarde..." : "Mettre à jour le mot de passe"}
        </button>
      </div>
    </form>
  );
}
