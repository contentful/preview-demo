import Link from "next/link";
import CoverImage from "./coverImage";
import _ from "lodash";

const LayoutFooter = () => {
  const linkClassname =
    "whitespace-nowrap mr-2 py-2 px-4 cursor-pointer rounded-xl bg-yellow-300 hover:bg-yellow-500";
  return (
    <div>
      <div className="bg-blue-200 w-full py-20 text-center">
     This is purely for learning purposes. Source code is available on Github.
      </div>
      <div className="bg-gray-800 text-white text-xs w-full text-center">
     Contentful Learning Services
      </div>
    </div>
  );
};

export default LayoutFooter;
