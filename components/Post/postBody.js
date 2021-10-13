import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import markdownStyles from "../markdown-styles.module.css";
import _ from "lodash";

const PostBody = (props) => {
  const content = _.get(props, "content");
  return (
    <div className="">
      <div className="md:max-w-2xl mx-auto w-full overflow-scroll md:overflow-hidden">
        <div className={markdownStyles["markdown"]}>
          {documentToReactComponents(content)}
        </div>
      </div>
    </div>
  );
};

export default PostBody;
