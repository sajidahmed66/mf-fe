import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import React from "react";

const Dashboard = () => {
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
