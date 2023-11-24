import { storage } from '@/services/storage';
import { useEffect, useState } from 'react';

function getStorageValue<T>(key: string, defaultValue: T) {
  const saved = storage.getString(key);

  if (!saved) {
    return defaultValue;
  }

  const initial = JSON.parse(saved);

  return initial || defaultValue;
}

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    storage.set(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
