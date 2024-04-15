import { SDK_CONFIG } from "./config";
import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: SDK_CONFIG.project_id,
      privateKey: SDK_CONFIG.private_key,
      clientEmail: SDK_CONFIG.client_email,
    }),
  });
}

export { firebaseAdmin };
