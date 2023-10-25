import { useAppSelector } from "@/app/hooks";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { FC } from "react";

const Dashboard: FC = () => {
  const {accessToken}= useAppSelector(state=> state.auth)
  console.log(accessToken)
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Dashboard",
            link: "/dashboard",
          },
        ]}
      />
      {/* Dashboard */}
    </div>
  );
};

export default Dashboard;
