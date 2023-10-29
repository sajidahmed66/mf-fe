import LoginComponent from "@/components/login/login";
import useAuthCheck from "@/libs/hooks/useAuthCheck";
import { isAuthenticated } from "@/libs/utils/auth/auth";
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
      setIsCheckingAuth(false);
    }
  }, [authCheck]);
  return (
    <>
      {checkingAuth ? (
        // TODO we could add a loding segment here
        <div className="flex items-center space-x-2">
          <div aria-label="Loading..." role="status">
            <svg className="h-12 w-12 animate-spin stroke-slate-500" viewBox="0 0 256 256">
              <line
                x1="128"
                y1="32"
                x2="128"
                y2="64"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="60.1"
                x2="173.3"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="224"
                y1="128"
                x2="192"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="195.9"
                x2="173.3"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="128"
                y1="224"
                x2="128"
                y2="192"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="195.9"
                x2="82.7"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="32"
                y1="128"
                x2="64"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="60.1"
                x2="82.7"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
          </div>
          <span className="text-xs font-medium text-slate-500">Checking User Auth ...</span>
        </div>
      ) : (
        <div className=" h-[100vh] w-[100vw]">
          <div className="flex-clo flex h-full w-full items-center justify-center">
            <LoginComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
