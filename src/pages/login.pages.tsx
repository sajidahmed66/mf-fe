import LoginComponent from "@/components/login/login";
import { isAuthenticated } from "@/libs/utils/auth/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const isUserLoggedIn = isAuthenticated();
  const navigate = useNavigate();
  //avigate
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/");
    }
  });
  return (
    <>
      {!isAuthenticated() ? (
        <div className=" h-[100vh] w-[100vw]">
          <div className="flex items-center justify-center w-full h-full flex-clo">
            <LoginComponent />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Login;
