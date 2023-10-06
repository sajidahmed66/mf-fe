import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { FC } from "react";

const Dashboard: FC = () => {
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
