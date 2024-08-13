"use client";

import React from "react";
import Heading from "@/app/utils/Heading";
import AdminProtected from "@/app/hooks/adminProtected";
import AdminSideBar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AllCourses from "../../components/Admin/Course/AllCourses";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Acadify - Admin"
          description="Acadify is a platform from students to learn and get help from teachers"
          keywords="Programming, MERN, Courses, Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSideBar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
