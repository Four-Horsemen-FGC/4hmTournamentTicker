import { useUserDocumentOnce } from "./useUserDocumentOnce";
export const useEntryOnce = (event) => {
  const [userDoc] = useUserDocumentOnce();
  return userDoc?.data()?.[event];
};
