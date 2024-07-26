import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../types/user.type";
import { isUserLoggedIn } from "../utils/utils";

interface AuthState {
  user: IUser | null;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const defaultAuthState: AuthState = {
  isLoggedIn: !!localStorage.getItem("access_token"), // Khởi tạo từ localStorage
  user: JSON.parse(localStorage.getItem("user") || "null"), // Khởi tạo từ localStorage
  setIsLoggedIn: () => {},
  setUser: () => {},
};

const AuthContext = createContext(defaultAuthState);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );
  const [user, setUser] = useState<IUser | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isUserLoggedIn();
      setIsLoggedIn(loggedIn);
      if (!loggedIn) {
        setUser(null);
        localStorage.removeItem("user");
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
