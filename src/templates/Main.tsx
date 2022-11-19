import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto ">
      <div className="border-b border-gray-300">
        <div className="flex">
          <div className=" h-full w-full">
            <div className="  ">{props.children}</div>
          </div>
        </div>
        <div className="content px-5 text-xl"></div>
      </div>
    </div>
  </div>
);

export { Main };
