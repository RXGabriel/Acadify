"use client";

import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from "../../components/Admin/DashboardHeader";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Acadify - Admin"
        description="Acadify is a platform from students to learn and get help from teachers"
        keywords="Programming, MERN, Courses, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CourseAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
