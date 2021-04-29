import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "../index.js";

export const useUserDocumentOnce = () => {
  const [user] = useAuthState(firebase.auth());
  return useDocumentOnce(db.doc(`users/${user.uid}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
};
