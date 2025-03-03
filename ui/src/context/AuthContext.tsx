import { createContext, useState, useEffect, ReactNode } from "react";
import { authService } from "../services/auth";

interface User {
  username: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(
    () => JSON.parse(localStorage.getItem("user") || "null")
  );
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      console.log("AuthContext: Fetched user", userData);
      setUser(userData);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

