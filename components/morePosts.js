import Link from "next/link";
import PostPreview from "./Post/postPreview";
import _ from "lodash";
import dayjs from "dayjs";
let advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

const MorePosts = (props) => {
  const posts = _.get(props, "posts");

  return (
    <div>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-center whitespace-nowrap">
        More Posts
      </h2>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {Array.isArray(posts)
          ? posts.map((item, itemKey) => {
              const post = _.get(item, "fields");
              const slug = _.get(post, "slug");
              const date = _.get(post, "date");
              let postDate = dayjs(date).format(" dddd Do MMMM, YYYY");

              return (
                <Link key={itemKey} href={`/posts/${slug}`}>
                  <div
                    className="mb-4  md:mr-10 cursor-pointer hover:scale-105 ease-in-out"
                    key={itemKey}
                  >
                    <PostPreview date={postDate} post={post} />
                  </div>
                </Link>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default MorePosts;
