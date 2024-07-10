"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading
        title="Acadify"
        description="Acadify is a platform from students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
    </div>
  );
};

export default Page;
