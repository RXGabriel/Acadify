"use client";

import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import UserAnalytics from "../../../app/components/Admin/Analytics/UserAnalytics";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Acadify - Admin"
        description="Acadify is a platform from students to learn and get help from teachers"
        keywords="Programming, MERN, Courses, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <UserAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
