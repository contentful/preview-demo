import Head from "next/head";
import _ from "lodash";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../util/api";
import MorePosts from "../../components/morePosts";
import CoverImage from "../../components/coverImage";
import PostBody from "../../components/Post/postBody";
import PostHeader from "../../components/Post/postHeader";
import PostAuthor from "../../components/Post/postAuthor";
import dayjs from "dayjs";
let advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

const Post = (props) => {
  const post = _.get(props, "post[0].fields");
  const preview = _.get(props, "preview");
  const morePosts = _.get(props, "morePosts");

  const title = _.get(post, "title");
  const slug = _.get(post, "slug");
  const externalUrl = _.get(post, "externalUrl");
  const author = _.get(post, "author.fields.name");
  const authorImage = _.get(post, "author.fields.picture.fields.file.url");
  const coverImage = _.get(post, "coverImage.fields.file.url");
  const content = _.get(post, "content");
  const date = _.get(post, "date");
  let postDate = dayjs(date).format(" dddd Do MMMM, YYYY");

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>
            {title} | {author}
          </title>
          <meta property="og:image" content={coverImage} />
        </Head>

        <div className="px-4 md:px-20 lg:px-40 overflow-hidden">
          {/* post header */}
          <PostHeader title={title} date={postDate} />
          {/* post author */}
          <PostAuthor
            author={author}
            authorImage={authorImage}
            date={postDate}
          />
          {/* cover image */}
          <div className="mb-8 md:mb-16 sm:mx-0">
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
          {/* post body */}
          <PostBody content={content} />
          <br />
          <hr />
          <br />
          {Array.isArray(morePosts)
            ? morePosts.length > 0 && <MorePosts posts={morePosts} />
            : ""}
        </div>

        <div className="px-40"></div>
      </Layout>

      <div className=""></div>
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: Array.isArray()
      ? allPosts?.map(({ slug }) => `/posts/${slug}`) ?? []
      : [],
    fallback: true,
  };
}

export default Post;
