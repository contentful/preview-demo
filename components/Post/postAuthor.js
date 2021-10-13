import Image from "next/image";
import _ from "lodash";

const PostAuthor = (props) => {
  const author = _.get(props, "author");
  const authorImage = _.get(props, "authorImage");
  const date = _.get(props, "date");

  return (
    <div className="flex flex-row items-center mb-4 mt-4">
      <div className="w-14 h-14 relative md:mr-2 ">
        {" "}
        {authorImage ? (
          <Image
            src={`http:${authorImage}`}
            layout="fill"
            className="rounded-full"
            alt={author}
            unoptimized={true}
          />
        ) : (
          ""
        )}{" "}
      </div>{" "}
      <div className="md:mr-2 whitespace-nowrap flex flex-col">
        <span> {author} </span>{" "}
        <span className="text-center font-bold text-xs"> {date} </span>
      </div>{" "}
    </div>
  );
};

export default PostAuthor;
