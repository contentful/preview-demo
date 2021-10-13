import Link from "next/link";
import CoverImage from "./coverImage";
import _ from "lodash";

const MainNav = () => {
  const linkClassname =
    "whitespace-nowrap mr-2 py-2 px-4 cursor-pointer rounded-xl bg-yellow-300 hover:bg-yellow-500";
  return (
    <div>
      <div className="bg-blue-200 w-full">
        <div className="flex flex-row px-4 md:px-20 lg:px-40 py-10">
          <div className="float-left w-full font-bold text-xl">
            <Link href="/">Preview Demo.</Link>{" "}
          </div>{" "}
          <div className="float-right flex flex-row items-center">
            <span className={linkClassname}> link 1 </span>{" "}
            <span className={linkClassname}> link 2 </span>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default MainNav;
