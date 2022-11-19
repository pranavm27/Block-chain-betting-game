import { NUMBER_BASE } from "@/config/config";
import { useEffect } from "react";
import useMetaMask from "../../hooks/useMeta";

function Header() {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();
  const { ticketPrice, totalPool, fees } = useMetaMask();

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="flex-auto">
          <img className="" src="/assets/images/worldcup_logo.png" />
        </div>

        <div
          className="
              top-curve
              bottom-curve
              header-card
                mt-20
                mb-5
                p-3 
                 md:h-32 lg:h-32
                flex-auto"
        >
          <div className=" flex flex-wrap ">
            <div className="flex-auto">
              <h5 className=" text-lg text-center font-bold tracking-tight  text-white">
                {"TICKET COST"}
              </h5>
              <p
                className=" text-center   text-4xl font-bold text-gray-400"
                style={{ color: "#00cf00" }}
              >
                {ticketPrice / NUMBER_BASE || 0}
              </p>
            </div>

            <div className="flex-auto">
              <h5 className=" text-lg text-center font-bold  tracking-tight text-white">
                {"CURRENT POT"}
              </h5>
              <p
                className=" text-center   text-4xl font-bold text-gray-400"
                style={{ color: "#fbdf00" }}
              >
                {totalPool}
              </p>
            </div>

            <div className="flex-auto">
              <h5 className=" text-lg text-center font-bold tracking-tight text-white">
                {"PROTOCOL FEE"}
              </h5>
              <p
                className=" text-center   text-4xl font-bold text-gray-400"
                style={{ color: "#00d500" }}
              >
                {fees}
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h1 className=" text-4xl text-center font-bold tracking-tight text-white">
              {"Buy tickets to bet on your team to win a share of the pot!"}
            </h1>
          </div>
        </div>

        <div className="flex-auto  	">
          <button
            className="p-2 font-bold lg:mt-14 float-right "
            style={{
              color: "#fff",
              backgroundColor: "#ea5729",
            }}
            onClick={connect}
            disabled={shouldDisable}
          >
            {isActive ? account : "connect to metamask"}
          </button>

          <div className="mt-2 mb-2"></div>
          {/* <button
            className="p-2 font-bold"
            style={{
              color: "#fff",
              backgroundColor: "#ea5729",
            }}
            onClick={connect}
            disabled={shouldDisable}
          >
            DOCS
          </button> */}

          {/* <button onClick={disconnect}>Disconnect MetaMask</button> */}
        </div>
      </div>
    </>
  );
}

export default Header;
