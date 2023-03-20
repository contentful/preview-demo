import Head from "next/head";
import _ from "lodash";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllLocales } from "../util/api";
import HeroPost from "../components/heroPost";
import MorePosts from "../components/morePosts";

import dayjs from "dayjs";
let advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export default function Home(props) {
  const allPosts = _.get(props, "allPosts");
  const preview = _.get(props, "preview");
  const heroPost = _.get(allPosts, "[0]");
  const morePosts = Array.isArray(allPosts) ? allPosts.slice(1) : {};

  const date = _.get(heroPost, "fields.date");
  const title = _.get(heroPost, "fields.title");
  const excerpt = _.get(heroPost, "fields.excerpt");
  const slug = _.get(heroPost, "fields.slug");
  let postDate = dayjs(date).format(" dddd Do MMMM, YYYY");
  const fields = _.get(allPosts, "fields");

  return (
    <div>
      <Layout preview={preview}>
        <hr />
        <div className="px-4  md:max-w-5xl lg:max-w-7xl m-auto">
          <HeroPost
            slug={slug}
            excerpt={excerpt}
            title={title}
            date={postDate}
            data={heroPost}
          />

          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </div>
      </Layout>
      <div className=""></div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];

  const allLocales = (await getAllLocales()) ?? [];

  return {
    props: { preview, allPosts, allLocales },
  };
}
