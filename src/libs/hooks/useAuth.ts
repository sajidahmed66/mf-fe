import { useAppSelector } from "@/app/hooks";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);
  if (auth?.accessToken) {
    return true;
  }
  return false;
}
