import { useAppSelector } from "@/app/hooks";
import Layout from "@/components/layout/Appshell";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RootElement = () => {
  const navigate = useNavigate();
  const authToken = useAppSelector((state) => state.auth.accessToken);
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default RootElement;
