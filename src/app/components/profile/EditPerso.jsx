import React, { useEffect, useState, useRef } from "react";
import { FiEye, FiTrash, FiUpload } from "react-icons/fi";
import { me } from "../../../services/authService";
import { updateProfile } from "../../../services/profileService"; // adapte le chemin

export default function InfoPerso({ userId }) {
  // États infos perso
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+221");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");

  // États mots de passe
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Affichage mots de passe
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Gestion avatar
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef();

  // Chargement / erreur
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await me(userId);
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setEmail(data.email || "");
        if (data.number) {
          setPhonePrefix(data.number.slice(0, 4));
          setPhoneNumber(data.number.slice(4));
        }
        setDob(data.dob || "");
      } catch (err) {
        setError("Erreur lors du chargement des données utilisateur");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    setSaving(true);
    setError(null);

    const profileData = {
      firstName,
      lastName,
      email,
      number: phonePrefix + phoneNumber,
      dob,
      currentPassword,
      newPassword,
    };

    try {
      await updateProfile(userId, profileData, avatarFile);
      alert("Profil mis à jour avec succès !");
      // Optionnel: reset mots de passe ou recharger données
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setAvatarFile(null);
    } catch (err) {
      setError("Erreur lors de la mise à jour du profil");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6 max-sm:flex-col">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 relative overflow-hidden">
          {avatarFile ? (
            <img
              src={URL.createObjectURL(avatarFile)}
              alt="avatar preview"
              className="w-full h-full object-cover"
            />
          ) : (
            "Profile"
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-cyan-900 text-white rounded"
            onClick={() => fileInputRef.current.click()}
          >
            <FiUpload /> Upload
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => setAvatarFile(null)}
          >
            <FiTrash /> Delete
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Info Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* ... champs firstName, lastName, email, téléphone, dob comme avant ... */}

        {/* Password Form comme dans ton code */}
        {/* ... */}

        <div className="text-right">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-cyan-900 text-white rounded hover:bg-cyan-800 disabled:opacity-50"
          >
            {saving ? "Enregistrement..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
