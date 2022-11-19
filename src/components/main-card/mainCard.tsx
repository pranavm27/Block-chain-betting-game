import React from "react";
import { useState, useEffect } from "react";
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
          className=" md:w-77 lg:w-8/12  sm:w-8/12 "
          style={{ margin: "auto", padding: "10px" }}
        >
          <div className="flex  flex-wrap">
            <div className="flex-auto ">
              <Title status={true}></Title>
            </div>
            {/* <div className="flex-auto ">
              <Title status={false}></Title>
            </div> */}
          </div>
          <div className="flex  flex-wrap ">
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
