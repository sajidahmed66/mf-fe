import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { isAuthenticated } from "@/libs/utils/auth/auth";
import { userLoggedIn } from "@/features/auth/authSlice";
import { useEffect, useState } from "react";

const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const authToken = useAppSelector((state) => state.auth.accessToken);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!authToken && token) {
      const isAuth = isAuthenticated();
      const parsedToken = JSON.parse(token);
      console.log("i am from use auth check");
      isAuth && dispatch(userLoggedIn({ accessToken: parsedToken }));
      setAuthChecked(true);
    }
  }, [dispatch, setAuthChecked, authToken]);

  return authChecked;
};

export default useAuthCheck;
