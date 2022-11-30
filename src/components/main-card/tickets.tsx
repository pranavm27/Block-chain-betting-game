import { MAX_TICKET_COUNT, STYLE } from "@/config/config";
import useMetaMask from "@/hooks/useMeta";
import React, { useRef, useState } from "react";

// import Web3 from "web3";

// create a web3 instance using a browser wallet or any another provider
// const web3 = new Web3(Web3?.givenProviderp);

// const getNetworkId = async () => {
//   const currentChainId = await web3.eth.net.getId();
//   return currentChainId;
// };

function Tickets() {
  const {
    makeSignedTransaction,
    allTeams,
    ticketsForWallet,
    teamForWallet,
    hasGameEnded,
    winningsForWallet,
    isSleeping,
    functionCollectWinnings,
    hasWalletWithdrawn,
    hasBet,
  } = useMetaMask();

  const [block, setBlock] = useState(false);
  const country = allTeams || [];

  const noOfTickets = Array.from(
    { length: MAX_TICKET_COUNT },
    (_, index) => index + 1
  );

  const collectWinnings = async () => {
    if (!hasGameEnded || hasWalletWithdrawn) return;

    await functionCollectWinnings();
  };

  const buyTicket = async () => {
    if (isSleeping || hasGameEnded) return;
    if (selectedTeam.current < 0) {
      alert("No Team Selected ");
      return;
    } else {
      setBlock(true);
      const result = await makeSignedTransaction(
        selectedTeam.current,
        noOfTicketsSelected.current
      );

      window.location.reload();
      return;
    }
  };

  const noOfTicketsSelected = useRef(1);
  const selectedTeam = useRef(-1);

  return (
    <>
      {hasGameEnded == false ? (
        <div
          className="
            header-card
            // p-7
            text-center
            font-bold tracking-tight  text-white
            sm:rounded-b md:rounded-none lg:rounded-br-2xl xl:rounded-br-2xl
            "
          style={{ minHeight: "43rem" }}
        >
          {isSleeping ? (
            <label
              className=" text-4xl"
              style={{ color: STYLE.ternaryTextColor }}
            >
              {" "}
              BETTING IS PAUSED{" "}
            </label>
          ) : (
            ""
          )}

          {hasBet ? (
            <p className="text-2xl "> YOU HAVE BET ON</p>
          ) : (
            <p className="text-3xl ">BUY TICKETS TO BET </p>
          )}

          <div className="">
            {hasBet > 0 ? (
              <div className="select text-2xl align-middle justify-center mt-14">
                <p
                  className="text-center align-middle justify-center pt-3 "
                  style={{ color: STYLE.ternaryTextColor }}
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
                      selectedTeam.current = parseInt(e.target.value);
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
            {hasBet ? (
              <>
                <p className="text-2xl mt-16 mb-5 "> YOUR TICKETS </p>
                <div className="select text-2xl align-middle justify-center ">
                  <p
                    className="text-center align-middle justify-center pt-3 "
                    style={{ color: STYLE.secondaryColor }}
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
                    style={{ color: STYLE.secondaryTextColor }}
                    onChange={(e) => {
                      noOfTicketsSelected.current = parseInt(e.target.value);
                    }}
                  >
                    {noOfTickets.map((item) => {
                      return (
                        <option
                          value={item}
                          style={{ color: STYLE.secondaryTextColor }}
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <button
                  className="p-2 m-9"
                  disabled={isSleeping || hasGameEnded || block}
                  style={{
                    color: STYLE.primaryTextColor,
                    backgroundColor: STYLE.secondaryColor,
                    width: "10em",
                    borderRadius: "12px",
                  }}
                >
                  <p className="text-2xl" onClick={() => buyTicket()}>
                    BUY
                  </p>
                </button>
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
            sm:rounded-br-3xl md:rounded-none lg:rounded-br-3xl xl:rounded-br-3xl
            "
          style={{ minHeight: "40rem" }}
        >
          <p
            className="text-3xl pt-10"
            style={{ color: STYLE.secondaryTextColor }}
          >
            {" "}
            BETTING HAS ENDED
          </p>{" "}
          {}
          <p className="text-3xl ">
            {hasBet === true && winningsForWallet <= 0
              ? "YOUR TEAM DID NOT WIN!"
              : ""}
            {hasBet === true && winningsForWallet > 0 ? "YOUR TEAM  WON!" : ""}
            {hasBet === false ? "YOU MISSED OUT !" : ""}
          </p>
          <div className="">
            {hasBet && teamForWallet?.length > 0 ? (
              <div className="select text-2xl align-middle justify-center ">
                <p
                  className="text-center align-middle justify-center pt-3 "
                  style={{ color: STYLE.ternaryTextColor }}
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
                    style={{ color: STYLE.secondaryTextColor }}
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
          {hasBet ? (
            <>
              <p className="text-2xl  "> WINNINGS </p>
              <div className="select text-2xl align-middle justify-center ">
                <p
                  className="text-center align-middle justify-center pt-3 "
                  style={{ color: STYLE.ternaryTextColor }}
                >
                  {winningsForWallet}
                </p>
              </div>

              {hasBet === true && hasWalletWithdrawn && winningsForWallet > 0 && (
                <div className="select text-2xl align-middle justify-center mt-10 ">
                  <p
                    className="text-center align-middle justify-center pt-3 "
                    style={{ color: STYLE.secondaryTextColor }}
                  >
                    {" Winning Withdrawn!"}
                  </p>
                </div>
              )}
              {hasBet === true && winningsForWallet > 0 && !hasWalletWithdrawn && (
                <button
                  className="p-2 m-9"
                  disabled={hasWalletWithdrawn}
                  style={{
                    color: STYLE.primaryTextColor,
                    backgroundColor: STYLE.secondaryColor,
                    width: "10em",
                    borderRadius: "12px",
                  }}
                >
                  <p className="text-2xl" onClick={() => collectWinnings()}>
                    COLLECT
                  </p>
                </button>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

//

export default Tickets;
