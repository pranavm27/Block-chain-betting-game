import React from "react";
import Title from "./title";
import Teams from "./teams";
import Tickets from "./tickets";

import useMetaMask from "../../hooks/useMeta";

function Card() {
  const { allTicketForTeam } = useMetaMask();
  return (
    <>
    
      <div className="mt-30">
      <div
          className=" md:h-26 lg:h-26
                 basis-1/2"
        >
          <div className=" flex flex-wrap ">
            <div className="flex-auto">
              <h1 className=" text-4xl text-center font-bold tracking-tight text-white">
                {"Buy tickets to bet on your team to win a share of the pot!"}
              </h1>
            </div>
          </div>
        </div>
        <div
          className=" md:w-8/12 lg:w-10/12  sm:w-10/12 "
          style={{ margin: "auto", padding: "10px" }}
        >
          <div className="flex  flex-wrap ">
            <div className="flex-auto ">
              <Title status={true}></Title>
            </div>
            {/* <div className="flex-auto ">
              <Title status={false}></Title>
            </div> */}
          </div>
          <div className="flex  flex-wrap flex-wrap-reverse ">
            <div className="flex-auto ">
              <Teams allTeams={allTicketForTeam}></Teams>
            </div>
            <div className="flex-auto ">
              <Tickets></Tickets>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
