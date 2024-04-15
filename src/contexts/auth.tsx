import nookies from "nookies";
import firebase from "firebase/compat/app";
import { firebaseClient } from "@/service/firebase/firebase-client";
import { createContext, useState, useEffect, ReactElement } from "react";

export const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
});

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
    });
  }, []);

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
