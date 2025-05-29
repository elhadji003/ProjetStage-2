import React, { useRef } from "react";
import { FiUpload, FiTrash } from "react-icons/fi";

export default function AvatarSection({
  avatarFile,
  avatarUrl,
  onFileChange,
  onRemove,
}) {
  const fileInputRef = useRef();

  return (
    <div className="flex items-center gap-4 mb-6 max-sm:flex-col">
      <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
        {avatarFile ? (
          <img
            src={URL.createObjectURL(avatarFile)}
            alt="avatar preview"
            className="w-full h-full object-cover"
          />
        ) : avatarUrl ? (
          <img
            src={avatarUrl}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Profile
          </div>
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
          onClick={onRemove}
        >
          <FiTrash /> Supprimer
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
