import { useState } from "react";
import { isBrowser } from "../utils/isBrowser";

export const useSafeLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (isBrowser()) {
      try {
        const item = window.localStorage.getItem(key);
        // Si c’est un objet, on parse ; sinon, on laisse brut
        if (initialValue !== null && typeof initialValue === "object") {
          return item ? JSON.parse(item) : initialValue;
        }
        return item !== null ? item : initialValue;
      } catch (error) {
        console.error(`Erreur lecture localStorage[${key}]`, error);
        return initialValue;
      }
    }
    return initialValue;
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isBrowser()) {
        if (typeof valueToStore === "object") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } else {
          window.localStorage.setItem(key, valueToStore);
        }
      }
    } catch (error) {
      console.error(`Erreur écriture localStorage[${key}]`, error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      if (isBrowser()) {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Erreur suppression localStorage[${key}]`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};
