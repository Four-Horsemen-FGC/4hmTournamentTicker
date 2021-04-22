import { useUserDocumentOnce } from "./useUserDocumentOnce";
export const useActiveEventOnce = () => {
  const [userDoc] = useUserDocumentOnce();
  return userDoc?.data().activeEvent;
};
