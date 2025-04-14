import { FC } from "react";

import UnderConstruction from "../components/UnderConstruction";
const Blog: FC = () => {
  return (
    <div className="px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">
          Meu Dev Blog
        </h1>

        <hr className="golden mb-4" />
      </div>

      <UnderConstruction />
    </div>
  );
};

export default Blog;
