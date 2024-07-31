"use client";

import React from "react";
import Heading from "@/app/utils/Heading";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AllInvoices from "@/app/components/Admin/Order/AllInvoices";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";

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
          <AllInvoices />
        </div>
      </div>
    </div>
  );
};
export default page;
