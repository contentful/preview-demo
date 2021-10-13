import _ from "lodash";

const PostHeader = (props) => {
  const date = _.get(props, "date");

  return (
    <div className="flex flex-col mb-12 ">
      <h1 className="text-4xl whitespace-nowrap md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center mt-4">
        {props.title ? props.title : ""}
      </h1>
      {/* <small className="text-center mt-4"> {date}</small> */}
    </div>
  );
};

export default PostHeader;
