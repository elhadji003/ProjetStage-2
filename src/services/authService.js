import api from "./api";

export const login = (email, password) =>
  api.post("/login", { email, password });

export const register = (formData) => api.post("/register", formData);

export const me = () => api.get(`/me`);

export const updateProfile = (profileData, avatarFile) => {
  const formData = new FormData();

  for (const key in profileData) {
    if (profileData[key] !== undefined && profileData[key] !== null) {
      formData.append(key, profileData[key]);
    }
  }

  if (avatarFile) {
    formData.append("avatar", avatarFile);
  }

  return api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePassword = (passwordData) =>
  api.patch("/password", passwordData);
