import React, { useEffect, useState } from "react";
import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import Image from "next/image";
import { format } from "timeago.js";
import { toast } from "react-hot-toast";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineStar,
} from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";
import Ratings from "@/app/utils/Ratings";

type Props = {
  data: any;
  id: string;
  activeVideo: number;
  setActiveVideo: (activeVideo: number) => void;
  user: any;
};

const CourseContentMedia = (props: Props) => {
  return <div>CourseContentMedia</div>;
};

export default CourseContentMedia;
