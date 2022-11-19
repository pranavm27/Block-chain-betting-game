import useMetaMask from "@/hooks/useMeta";
import React, { useState, useRef } from "react";

import Web3 from "web3";

// create a web3 instance using a browser wallet or any another provider
const web3 = new Web3(Web3?.givenProviderp);

const getNetworkId = async () => {
  const currentChainId = await web3.eth.net.getId();
  return currentChainId;
};

function Tickets() {
  const {
    makeSignedTransaction,
    allTeams,
    ticketsForWallet,
    teamForWallet,
    hasGameEnded,
    winningsForWallet,
    isSleeping,
    hasFeesWithdrawn,
    functionCollectWinnings,
    hasWalletWithdrawn,
    hasBet,
  } = useMetaMask();
  const country = allTeams;
  const noOfTickets = [...new Array(101)].map((each, index) => {
    return index + 1;
  });

  const collectWinnings = async () => {
    if (!hasGameEnded || hasFeesWithdrawn) return;

    const result = await functionCollectWinnings();
  };

  const buyTicket = async () => {
    if (isSleeping || hasGameEnded) return;
    if (selectedTeam.current < 0) {
      alert("No Team Selected ");
      return;
    } else {
      const result = await makeSignedTransaction(
        selectedTeam.current,
        noOfTicketsSelected.current
      );
      // alert(result);
      return;
    }
  };

  const noOfTicketsSelected = useRef(1);
  const selectedTeam = useRef(-1);

  return (
    <>
      {hasGameEnded == false ? 
      (
        <div
          className="
            header-card
            // p-7
            text-center
            font-bold tracking-tight  text-white
            sm:rounded-b md:rounded-none lg:rounded-r-2xl xl:rounded-r-2xl
            "

          style={{ minHeight: "35rem" }}
        >
          {teamForWallet?.length > 0 ? (
            <p className="text-2xl m-10"> YOU HAVE BET ON</p>
          ) : (
            <p className="text-3xl m-10">BUY TICKETS TO BET </p>
          )}

          <div className="">
            {teamForWallet?.length > 0 ? (
              <div className="select text-2xl align-middle justify-center mt-14">
                <p
                  className="text-center align-middle justify-center pt-3 "
                  style={{ color: "#fbdf00" }}
                >
                  {teamForWallet}
                </p>
              </div>
            ) : (
              <>
                <p className="text-2xl "> SELECT YOUR TEAM</p>
                <div className="select text-2xl">
                  <select
                    disabled={isSleeping || hasGameEnded}
                    name="format"
                    id="format"
                    onChange={(e) => {
                      selectedTeam.current = e.target.value;
                    }}
                  >
                    <option selected disabled value={-1}>
                      CHOOSE YOUR TEAM
                    </option>
                    {country.map((item: any, index: any) => {
                      return <option value={index}>{item}</option>;
                    })}
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="m-5">
            {teamForWallet?.length > 0 ? (
              <>
                <p className="text-2xl mt-16 mb-5 "> YOUR TICKETS </p>
                <div className="select text-2xl align-middle justify-center ">
                  <p
                    className="text-center align-middle justify-center pt-3 "
                    style={{ color: "#00d500" }}
                  >
                    {" "}
                    {ticketsForWallet}
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-2xl "> NUMBER OF TICKETS TO BUY</p>
                <div className="select text-2xl">
                  <select
                    disabled={isSleeping || hasGameEnded}
                    name="format"
                    id="format"
                    style={{ color: "#00c300" }}
                    onChange={(e) => {
                      noOfTicketsSelected.current = e.target.value;
                    }}
                  >
                    {noOfTickets.map((item) => {
                      return (
                        <option style={{ color: "#00c300" }}>{item}</option>
                      );
                    })}
                  </select>
                </div>

                <button
                  className="p-2 m-9"
                  disabled={isSleeping || hasGameEnded}
                  style={{
                    color: "#fff",
                    backgroundColor: "#ea5729",
                    width: "10em",
                    borderRadius: "12px",
                  }}
                >
                  <p className="text-2xl" onClick={() => buyTicket()}>
                    BUY
                  </p>
                </button>

                {isSleeping ? (
                  <>
                    <div className="select text-2xl align-middle justify-center mt-14">
                      <p
                        className="text-center align-middle justify-center pt-3 "
                        style={{ color: "#fbdf00" }}
                      >
                        BETTING IS PAUSED
                      </p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div
          className="
            header-card
            pl-7
            pr-7
            text-center
            font-bold tracking-tight  text-white
            sm:rounded-br-3xl md:rounded-none lg:rounded-br-3xl xl:rounded-br-3xl"
          style={{ minHeight: "35rem" }}
        >
          <p className="text-2xl " style={{ color: "#00d500" }}> BETTING HAS ENDED</p> {}
          <p className="text-2xl ">  
          {hasBet === true && winningsForWallet <= 0 ? "YOUR TEAM DID NOT WIN!" : ""}
          {hasBet === true && winningsForWallet > 0 ? "YOUR TEAM  WON!" : ""}
          {hasBet === false ? "YOU MISSED OUT !" : ""}

          </p>

          <div className="">
            {hasBet && teamForWallet?.length > 0 ? (
              <div className="select text-2xl align-middle justify-center ">
                <p
                  className="text-center align-middle justify-center pt-3 "
                  style={{ color: "#fbdf00" }}
                >
                  {teamForWallet}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="m-5">
            {hasBet && teamForWallet?.length > 0 ? (
              <>
                <p className="text-2xl  "> YOUR TICKETS </p>
                <div className="select text-2xl align-middle justify-center ">
                  <p
                    className="text-center align-middle justify-center pt-3 "
                    style={{ color: "#00d500" }}
                  >
                    {" "}
                    {ticketsForWallet}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          {hasBet ? <>
            <p className="text-2xl  "> WINNINGS</p>
          <div className="select text-2xl align-middle justify-center ">
            <p
              className="text-center align-middle justify-center pt-3 "
              style={{ color: "#fbdf00" }}
            >
              {winningsForWallet}
            </p>
          </div>

          <button
            className="p-2 m-9"
            disabled={hasWalletWithdrawn}
            style={{
              color: "#fff",
              backgroundColor: "#ea5729",
              width: "10em",
              borderRadius: "12px",
            }}
          >
            <p className="text-2xl" onClick={() => collectWinnings()}>
              COLLECT
            </p>
          </button>
          </>: ""}
          </div>
      )}


    </>
  );
}

//

export default Tickets;
