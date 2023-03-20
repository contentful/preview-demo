import Link from "next/link";
import CoverImage from "./coverImage";
import _ from "lodash";

const HeroPost = (props) => {
  const data = _.get(props, "data");
  const date = _.get(props, "date");
  const fields = _.get(data, "fields");
  const imageUrl = _.get(fields, "coverImage.fields.file.url");
  const title = _.get(fields, "coverImage.fields.title");

  return (
    <div>
      <div className="flex flex-col mt-8 mb-8">
        <div className="flex flex-col">
          {props.slug ? (
            <Link href={`/posts/${props.slug}`}>
              <CoverImage title={title} slug={props.slug} url={`${imageUrl}`} />
            </Link>
          ) : (
            <CoverImage title={title} slug={props.slug} url={`${imageUrl}`} />
          )}
        </div>{" "}
        <div className="flex flex-col w-full md:flex-row mt-4 mb-4 py-4 px-2 bg-yellow-300 rounded-xl">
          <div className="md:mr-4x md:w-1/2 flex flex-col">
            <div className="">
              <h1 className="text-xl whitespace-nowrap md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none  ">
                {props.title ? props.title : ""}
              </h1>
            </div>
            <div className="mt-4 underline">{date}</div>
          </div>
          <div className="md:w-1/2 text-3xl max-h-40 tracking-tighter leading-tight md:leading-none">
            {props.excerpt ? props.excerpt : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPost;
