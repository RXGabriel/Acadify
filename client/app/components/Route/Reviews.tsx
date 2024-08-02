import React from "react";
import Image from "next/image";
import ReviewCard from "../Review/ReviewCard";
import { styles } from "@/app/styles/style";

type Props = {};

export const reviews = [
  [
    {
      name: "Gene Bates",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      profession: "Student | University of Cambridge",
      comment:
        "I had the pleasure of exploring Acadify, a site that offers an extensive range of courses on various technology-related topics. I was deeply impressed with my experience, as the site offers a comprehensive selection of courses that cater to different skill levels and interests. If you are looking to enhance your knowledge and skills in the tech industry, I highly recommend checking out Acadify!",
    },
    {
      name: "Verna Santos",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      profession: "Full Stack Developer | Quarter Ltd.",
      comment:
        "Thank you for your amazing programming tutorial channel! Your teaching style is exceptional, and the quality of your tutorials is top-notch. Your ability to break down complex topics into manageable parts and cover various programming languages and topics is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a collaborative learning environment. I appreciate your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!",
    },
    {
      name: "Jay Gibbs",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      profession: "Student of Computer Systems Engineering | Zimbabwe",
      comment:
        "Thank you for your amazing programming tutorial channel! Your teaching style is exceptional, and the quality of your tutorials is top-notch. Your ability to break down complex topics into manageable parts and cover various programming languages and topics is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a collaborative learning environment. I appreciate your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!",
    },
    {
      name: "Mina Davidson",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      profession: "Junior Web Developer | Indonesia",
      comment:
        "I had the pleasure of exploring Acadify, a site that offers an extensive range of courses on various technology-related topics. I was deeply impressed with my experience.",
    },
    {
      name: "Rosemary Smith",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      profession: "Full Stack Developer | Algeria",
      comment:
        "Your content is very special. What I liked the most is that the videos are so long, which means they cover everything in detail. So, anyone with a beginner level can complete an integrated project by watching the videos. Thank you very much. I am very excited for the next videos. Keep up the amazing work!",
    },
    {
      name: "Laura Mackenzie",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      profession: "Full Stack Developer | Canada",
      comment:
        "Join Acadify! Acadify focuses on practical applications rather than just teaching the theory behind programming languages or frameworks. I took a class on creating a web marketplace using React JS, and it was very helpful in teaching me the different stages involved in building a project from start to finish. Overall, I highly recommend Acadify for anyone looking to improve their programming skills and build practical projects. Acadify is a great resource that will help you take your skills to the next level.",
    },
  ],
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div>
          <Image
            src={require("../../../public/assets/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>

        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Nossa Força</span>{" "}
            <br /> Veja o que Eles Dizem Sobre Nós
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            nulla nobis ipsa rem maxime reprehenderit.
          </p>
        </div>

        <br />
        <br />
      </div>

      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
