import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://projetstagebackend-2.onrender.com/api",
});

// Vérifier si on est côté navigateur
const isBrowser = typeof window !== "undefined";

// Initialiser le token depuis localStorage si présent
let token = null;
if (isBrowser) {
  token = localStorage.getItem("authToken") || null;
}

// Fonction pour définir dynamiquement le token
export const setApiToken = (newToken) => {
  token = newToken;
  if (isBrowser) {
    if (newToken) {
      localStorage.setItem("authToken", newToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }
};

// Intercepteur pour injecter le token
api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepteur pour uniformiser les réponses et gérer les erreurs 401
api.interceptors.response.use(
  (response) => response.data, // On retourne directement les données
  (error) => {
    if (isBrowser && error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
