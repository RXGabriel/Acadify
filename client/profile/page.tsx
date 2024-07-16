"use client";

import Header from "@/app/components/Header";
import Heading from "@/app/utils/Heading";
import Protected from "@/hooks/useProtected";
import React, { FC, useState } from "react";
import Profile from "../components/Profile/Profile";

type Props = {};

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Protected>
        <Heading
          title="Acadify"
          description="Acadify is a platform from students to learn and get help from teachers"
          keywords="Programming, MERN, Redux, Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
      </Protected>
    </div>
  );
};
export default Page;
