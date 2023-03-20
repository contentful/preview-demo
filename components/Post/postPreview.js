import Image from "next/image";
import _ from "lodash";
import PostAuthor from "./postAuthor";
import CoverImage from "../coverImage";
import Link from "next/link";
let advancedFormat = require("dayjs/plugin/advancedFormat");
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

const PostPreview = (props) => {
  const post = _.get(props, "post");
  const date = _.get(props, "date");

  const fields = _.get(props, "posts.fields");
  const title = _.get(post, "title");
  const slug = _.get(post, "slug");
  const excerpt = _.get(post, "excerpt");
  const externalUrl = _.get(post, "externalUrl");
  const author = _.get(post, "author.fields.name");
  const authorImage = _.get(post, "author.fields.picture.fields.file.url");
  const coverImage = _.get(post, "coverImage.fields.file.url");
  const content = _.get(post, "content");

  return (
    <div className="bg-blue-100 p-2 shadow-md rounded-xl">
      {/* {JSON.stringify(coverImage)} */}

      <div className="flex flex-col items-centerx">
        <div className="">
          <PostAuthor author={author} authorImage={authorImage} date={date} />
        </div>
        <div className="">
          {" "}
          <h3 className="text-2xl lg:text-3xl mb-5 leading-snug whitespace-nowrap">
            {/* <Link href={`/posts/${slug}`} className="hover:underline "> */}
            {title}
            {/* </Link> */}
          </h3>
        </div>
        <div className="mb-5">
          {coverImage ? (
            <CoverImage
              slug={slug}
              externalUrl={externalUrl}
              title={title}
              url={coverImage}
            />
          ) : (
            ""
          )}
        </div>
        <div className="mb-5 truncate">{excerpt}</div>
      </div>
    </div>
  );
};

export default PostPreview;
