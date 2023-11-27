import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, useContext, useMemo } from 'react';

export type UserEntity = {
  login: string;
};

export type LoginData = {
  login: string;
  password: string;
};

export type AuthContextState = {
  user: UserEntity | null;
  login: (data: LoginData) => void;
  logout: () => void;
};

const initialState: AuthContextState = {
  login: () => {},
  logout: () => {},
  user: null,
};

const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useLocalStorage<UserEntity | null>(
    '@brq-movies:user',
    null,
  );

  const login = ({ login, password }: LoginData) => {
    if (login !== 'user' || password !== '123') {
      throw new Error('Credenciais inválidas.');
    }

    setUser({
      login,
    });
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ login, logout, user }), [login, logout, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
