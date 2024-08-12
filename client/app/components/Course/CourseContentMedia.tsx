import React, { useEffect, useState } from "react";
import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import {
  useAddAnswerInQuestionMutation,
  useAddNewQuestionMutation,
  useAddReplyInReviewMutation,
  useAddReviewInCourseMutation,
  useGetCourseDetailsQuery,
} from "@/redux/features/courses/coursesApi";
import { format } from "timeago.js";
import { toast } from "react-hot-toast";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { VscVerifiedFilled } from "react-icons/vsc";
import Ratings from "@/app/utils/Ratings";
import socketIO from "socket.io-client";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

type Props = {
  data: any;
  id: string;
  activeVideo: number;
  setActiveVideo: (activeVideo: number) => void;
  user: any;
  refetch: any;
};

const CourseContentMedia = ({
  data,
  id,
  activeVideo,
  setActiveVideo,
  user,
  refetch,
}: Props) => {
  const [activeBar, setActiveBar] = useState(0);
  const [question, setQuestion] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [answer, setAnswer] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [reply, setReply] = useState("");
  const [reviewId, setReviewId] = useState("");
  const [isReviewReply, setIsReviewReply] = useState(false);

  const [
    addNewQuestion,
    { isSuccess, error, isLoading: questionCreationLoading },
  ] = useAddNewQuestionMutation();

  const { data: courseData, refetch: courseRefetch } = useGetCourseDetailsQuery(
    id,
    { refetchOnMountOrArgChange: true }
  );
  const [
    addAnswerInQuestion,
    {
      isSuccess: answerSuccess,
      error: answerError,
      isLoading: answerCreationLoading,
    },
  ] = useAddAnswerInQuestionMutation();

  const course = courseData?.course;
  const [
    addReviewInCourse,
    {
      isSuccess: reviewSuccess,
      error: reviewError,
      isLoading: reviewCreationLoading,
    },
  ] = useAddReviewInCourseMutation();

  const [
    addReplyInReview,
    {
      isSuccess: replySuccess,
      error: replyError,
      isLoading: replyCreationLoading,
    },
  ] = useAddReplyInReviewMutation();

  const isReviewExists = course?.reviews?.find(
    (item: any) => item.user._id === user._id
  );

  const handleQuestion = () => {
    if (question.length === 0) {
      toast.error("Question can't be empty");
    } else {
      addNewQuestion({
        question,
        courseId: id,
        contentId: data[activeVideo]._id,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setQuestion("");
      refetch();
      socketId.emit("notification", {
        title: `New Question Received`,
        message: `You have a new question in ${data[activeVideo].title}`,
        userId: user._id,
      });
    }
    if (answerSuccess) {
      setAnswer("");
      refetch();

      if (user.role !== "admin") {
        socketId.emit("notification", {
          title: `New Reply Received`,
          message: `You have a new question reply in ${data[activeVideo].title}`,
          userId: user._id,
        });
      }
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
    if (answerError) {
      if ("data" in answerError) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
    if (reviewSuccess) {
      setReview("");
      setRating(1);
      courseRefetch();
      socketId.emit("notification", {
        title: `New Question Received`,
        message: `You have a new question in ${data[activeVideo].title}`,
        userId: user._id,
      });
    }
    if (reviewError) {
      if ("data" in reviewError) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
    if (replySuccess) {
      setReply("");
      courseRefetch();
    }
    if (replyError) {
      if ("data" in replyError) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [
    isSuccess,
    error,
    answerSuccess,
    answerError,
    reviewSuccess,
    reviewError,
    replySuccess,
    replyError,
  ]);

  const handleAnswerSubmit = () => {
    addAnswerInQuestion({
      answer,
      courseId: id,
      contentId: data[activeVideo]._id,
      questionId: questionId,
    });
  };

  const handleReviewSubmit = async () => {
    if (review.length === 0) {
      toast.error("Review can't be empty");
    } else {
      addReviewInCourse({ review, rating, courseId: id });
    }
  };

  const handleReviewReplySubmit = () => {
    if (!replyCreationLoading) {
      if (reply === "") {
        toast.error("Reply can't be empty");
      } else {
        addReplyInReview({ comment: reply, courseId: id, reviewId });
      }
    }
  };

  return (
    <div className="w-[95%] 800px:w-[86%] py-4 m-auto">
      <CoursePlayer
        title={data[activeVideo]?.title}
        videoUrl={data[activeVideo]?.videoUrl}
      />

      <div className="w-full flex items-center justify-between my-3">
        <div
          className={`${
            styles.button
          } text-white  !w-[unset] !min-h-[40px] !py-[unset] ${
            activeVideo === 0 && "!cursor-no-drop opacity-[.8]"
          }`}
          onClick={() =>
            setActiveVideo(activeVideo === 0 ? 0 : activeVideo - 1)
          }
        >
          Prev Lesson
        </div>

        <div
          className={`${
            styles.button
          } !w-[unset] text-white  !min-h-[40px] !py-[unset] ${
            data.length - 1 === activeVideo && "!cursor-no-drop opacity-[.8]"
          }`}
          onClick={() =>
            setActiveVideo(
              data && data.length - 1 === activeVideo
                ? activeVideo
                : activeVideo + 1
            )
          }
        >
          Next Lesson
          <AiOutlineArrowRight className="ml-2" />
        </div>
      </div>

      <h1 className="pt-2 text-[25px] font-[600] dark:text-white text-black">
        {data[activeVideo].title}
      </h1>
      <br />

      <div className="w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner">
        {["Overview", "Resources", "Q&A", "Reviews"].map((text, index) => (
          <h5
            key={index}
            className={`800px:text-[20px] cursor-pointer ${
              activeBar === index
                ? "text-red-500"
                : "dark:text-white text-black"
            }`}
            onClick={() => setActiveBar(index)}
          >
            {text}
          </h5>
        ))}
      </div>
      <br />
      {activeBar === 0 && (
        <p className="text-[18px] whitespace-pre-line mb-3 dark:text-white text-black">
          {data[activeVideo]?.description}
        </p>
      )}

      {activeBar === 1 && (
        <div>
          {data[activeVideo]?.links.map((item: any, index: number) => (
            <div className="mb-5" key={index}>
              <h2 className="800px:text-[20px] 800px:inline-block dark:text-white text-black">
                {item.title && item.title + " :"}
              </h2>
              <a
                className="inline-block text-[#4395c4] 800px:text-[20px] 800px:pl-2"
                href={item.url}
              >
                {item.url}
              </a>
            </div>
          ))}
        </div>
      )}

      {activeBar === 2 && (
        <div className="w-full">
          <h2 className="text-[25px] font-[600] dark:text-white text-black mb-2">
            Questions
          </h2>
          <div>
            <input
              type="text"
              placeholder="Enter your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full py-2 px-4 rounded border border-gray-300 dark:bg-black dark:text-white"
            />
            <button
              className={`${styles.button} py-2 px-4 mt-2`}
              onClick={handleQuestion}
            >
              {questionCreationLoading ? "Sending..." : "Submit Question"}
            </button>
          </div>

          {course?.questions?.map((item: any, index: number) => (
            <div
              className="bg-gray-200 p-3 rounded my-2 dark:bg-gray-700 dark:text-white"
              key={index}
            >
              <h5 className="font-semibold">Question:</h5>
              <p>{item?.question}</p>
              {item?.answers?.map((ans: any, i: number) => (
                <div
                  key={i}
                  className="bg-gray-300 p-2 rounded my-2 dark:bg-gray-600"
                >
                  <h5 className="font-semibold">Answer:</h5>
                  <p>{ans?.answer}</p>
                </div>
              ))}
              {user?._id && (
                <div>
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full py-2 px-4 rounded border border-gray-300 dark:bg-black dark:text-white"
                  />
                  <button
                    className={`${styles.button} py-2 px-4 mt-2`}
                    onClick={() => {
                      setQuestionId(item._id);
                      handleAnswerSubmit();
                    }}
                  >
                    {answerCreationLoading ? "Sending..." : "Answer Question"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeBar === 3 && (
        <div className="w-full">
          <h2 className="text-[25px] font-[600] dark:text-white text-black mb-2">
            Avaliações
          </h2>
          {user?._id && !isReviewExists && (
            <div>
              <h3 className="text-[20px] font-[600] dark:text-white text-black mb-2">
                Add your review
              </h3>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer ${
                      index < rating ? "text-yellow-400" : "text-gray-400"
                    }`}
                    onClick={() => setRating(index + 1)}
                  >
                    <AiFillStar />
                  </span>
                ))}
              </div>
              <textarea
                placeholder="Enter your review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full py-2 px-4 rounded border border-gray-300 dark:bg-black dark:text-white"
              />
              <button
                className={`${styles.button} py-2 px-4 mt-2`}
                onClick={handleReviewSubmit}
              >
                {reviewCreationLoading ? "Sending..." : "Submit Review"}
              </button>
            </div>
          )}

          {course?.reviews?.map((item: any, index: number) => (
            <div
              className="bg-gray-200 p-3 rounded my-2 dark:bg-gray-700 dark:text-white"
              key={index}
            >
              <div className="flex items-center mb-2">
                <Ratings rating={item.rating} />
                <span className="ml-2 font-semibold">{item.user.name}</span>
                {item.user.verified && (
                  <VscVerifiedFilled className="ml-1 text-blue-500" />
                )}
              </div>
              <p>{item.review}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {format(item.createdAt)}
              </p>
              {user?._id && (
                <div>
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    className="w-full py-2 px-4 rounded border border-gray-300 dark:bg-black dark:text-white"
                  />
                  <button
                    className={`${styles.button} py-2 px-4 mt-2`}
                    onClick={() => {
                      setReviewId(item._id);
                      setIsReviewReply(true);
                      handleReviewReplySubmit();
                    }}
                  >
                    {replyCreationLoading ? "Sending..." : "Reply Review"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseContentMedia;
