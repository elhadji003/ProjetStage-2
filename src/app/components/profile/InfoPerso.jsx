import React, { useEffect, useState } from "react";
import {
  me,
  updateProfile,
  updatePassword,
} from "../../../services/authService";
import PasswordForm from "./PasswordForm";
import AvatarSection from "./AvatarSection";
import PersonalForm from "./PersonalForm";

export default function InfoPerso({ userId }) {
  // states + logic comme avant (inchangé)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+221");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [birthday, setBirthday] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

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
        setAvatarUrl(`https://projetstagebackend-2.onrender.com${data.avatar}`);
        if (data.birthday) {
          setBirthday(data.birthday.split("T")[0]); // extrait uniquement "YYYY-MM-DD"
        }
      } catch (err) {
        setError("Erreur lors du chargement des données utilisateur");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setSavingProfile(true);
    setError(null);

    const profileData = {
      firstName,
      lastName,
      email,
      number: phonePrefix + phoneNumber,
      birthday,
      userId,
    };

    try {
      await updateProfile(profileData, avatarFile);
      alert("Profil mis à jour avec succès !");
      setAvatarFile(null);
    } catch (err) {
      console.error("Erreur backend:", err.response ? err.response.data : err);
      setError(
        err.response?.data?.message || "Erreur lors de la mise à jour du profil"
      );
    } finally {
      setSavingProfile(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    setSavingPassword(true);
    setError(null);

    try {
      await updatePassword({ currentPassword, newPassword, userId });
      alert("Mot de passe mis à jour avec succès !");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Erreur backend:", err.response ? err.response.data : err);
      setError(
        err.response?.data?.message ||
          "Erreur lors de la mise à jour du mot de passe"
      );
    } finally {
      setSavingPassword(false);
    }
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="p-6">
      {error && <div className="text-red-600 mb-4">{error}</div>}

      <h1 className="text-2xl font-semibold mb-4">Informations Personnelles</h1>

      <AvatarSection
        avatarFile={avatarFile}
        avatarUrl={avatarUrl}
        onFileChange={(e) =>
          e.target.files &&
          e.target.files[0] &&
          setAvatarFile(e.target.files[0])
        }
        onRemove={() => setAvatarFile(null)}
      />

      <PersonalForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phonePrefix={phonePrefix}
        phoneNumber={phoneNumber}
        birthday={birthday}
        onFirstNameChange={(e) => setFirstName(e.target.value)}
        onLastNameChange={(e) => setLastName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPhonePrefixChange={(e) => setPhonePrefix(e.target.value)}
        onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)}
        onBirthdayChange={(e) => setBirthday(e.target.value)}
        onSubmit={handleProfileUpdate}
        saving={savingProfile}
      />

      <PasswordForm
        currentPassword={currentPassword}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        showNewPassword={showNewPassword}
        showConfirmPassword={showConfirmPassword}
        onCurrentPasswordChange={(e) => setCurrentPassword(e.target.value)}
        onNewPasswordChange={(e) => setNewPassword(e.target.value)}
        onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
        onToggleNewPassword={() => setShowNewPassword(!showNewPassword)}
        onToggleConfirmPassword={() =>
          setShowConfirmPassword(!showConfirmPassword)
        }
        onSubmit={handlePasswordUpdate}
        saving={savingPassword}
      />
    </div>
  );
}
