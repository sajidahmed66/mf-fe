import { useAppSelector } from "@/app/hooks";
import Layout from "@/components/layout/Appshell";
import { isAuthenticated } from "@/libs/utils/auth/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RootElement = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.accessToken);
  console.log("root element" , token)
  
  useEffect(() => {
    if (token === undefined && isAuthenticated() === false) {
      navigate("/login");
    }
  }, [token, isAuthenticated]);

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default RootElement;
