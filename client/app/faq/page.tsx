"use client";

import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="FAQ - Acadify"
        description="Acadify is a platform for selling courses, providing a wide range of educational content to enhance your skills and knowledge."
        keywords="Acadify, online courses, course sales, e-learning, education, skill development, learning platform, buy courses"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
