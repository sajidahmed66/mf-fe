import Layout from "@/components/layout/Appshell";
import { isAuthenticated } from "@/libs/utils/auth/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RootElement = () => {
  const navigate = useNavigate();
  console.log(isAuthenticated());
  //avigate
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default RootElement;
