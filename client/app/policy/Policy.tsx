import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            adipisci vero sunt cum sint delectus voluptates, obcaecati voluptas,
            blanditiis quos temporibus? Ducimus, doloribus? Nobis nulla
            voluptatum dolor tempora, necessitatibus quod.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nulla ipsa quasi veniam ipsam dolores delectus possimus non?
            Aliquid, laboriosam harum! Amet mollitia quae tenetur distinctio
            sequi ratione optio neque.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            recusandae libero rem est obcaecati temporibus, ut soluta aspernatur
            nesciunt id perferendis, laudantium dolores error nobis, non dicta
            quibusdam hic repellendus.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            dolore praesentium maxime mollitia nostrum impedit quis
            reprehenderit, deleniti unde blanditiis explicabo fugiat ullam non
            magnam? Odit odio esse cumque alias?
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio
            laboriosam asperiores placeat voluptate autem odit in quis ex, quod,
            facere inventore voluptates repudiandae ipsam debitis quae ad
            possimus vero.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
