import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Acadify?</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to take your programming skills to the next level? Look
          no further than Acadify, the premier programming community dedicated
          to helping new programmers achieve their goals and reach their full
          potential.
          <br />
          <br />
          As the founder and CEO of Acadify, I know firsthand the challenges
          that come with learning and growing in the programming industry. That
          is why I created Acadify; to provide new programmers with the
          resources and support they need to succeed.
          <br />
          <br />
          Our YouTube channel is a treasure trove of informative videos on
          everything from programming basics to advanced techniques. But that is
          not just the beginning. Our affordable courses are designed to give
          you the high-quality education you need to succeed in the industry,
          without breaking the bank.
          <br />
          <br />
          At Acadify, we believe that price should never be a barrier to
          achieving your dreams. That is why our courses are affordably priced –
          to ensure that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          But Acadify is more than just a community; we are a family. Our
          supportive community of like-minded individuals is here to help you
          every step of the way, whether you are just starting out or looking to
          take your skills to the next level.
          <br />
          <br />
          With Acadify by your side, there is not nothing standing between you
          and your dream job. Our courses and community will provide you with
          the guidance, support, and motivation you need to unleash your full
          potential and become a skilled programmer.
          <br />
          <br />
          So what are you waiting for? Join the Acadify family today and conquer
          the programming industry! With our affordable courses, informative
          videos, and supportive community, the sky is the limit.
        </p>
        <br />
        <span className="text-[22px]">RXGabriel</span>
        <h5 className="text-[18px] font-Poppins">Founder and CEO of Acadify</h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
