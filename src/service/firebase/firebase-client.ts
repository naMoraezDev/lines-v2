import "firebase/compat/auth";
import { CLIENT_CONFIG } from "./config";
import firebaseClient from "firebase/compat/app";

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL);
}

export { firebaseClient };
