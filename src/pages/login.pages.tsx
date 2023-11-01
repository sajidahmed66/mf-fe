import AuthLoader from "@/components/login/AuthLoader";
import LoginComponent from "@/components/login/login";
import useAuthCheck from "@/libs/hooks/useAuthCheck";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const authCheck = useAuthCheck();
  const [checkingAuth, setIsCheckingAuth] = useState<boolean>(true);
  //avigate
  useEffect(() => {
    if (authCheck) {
      navigate("/");
    }
    setIsCheckingAuth(false);
  }, [authCheck, navigate]);
  return (
    <>
      <div className=" h-[100vh] w-[100vw]">
        <div className="flex-clo flex h-full w-full items-center justify-center">
          {checkingAuth && <AuthLoader />}
          {!checkingAuth && !authCheck && <LoginComponent />}
        </div>
      </div>
    </>
  );
};

export default Login;
