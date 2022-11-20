import { NUMBER_BASE, TOKEN_NAME, DOCS } from "@/config/config";
import useMetaMask from "../../hooks/useMeta";

function Header() {
  const { connect, isActive, account } = useMetaMask();
  const { ticketPrice, totalPool, fees } = useMetaMask();

  return (
    <>
      <div className="lg:flex md:flex-none flex-wrap flex-row-reverse ">
        <div className="basis-1/4  	">
         
          <a
            className="  flex-auto p-2  mt-5 ml-5 font-bold lg:mt-14 mb-14 "
            style={{
              color: "#fff",
              backgroundColor: "#00cf00",
            }}
            target="_new"
            href="https://gotham-chainworks-llc.gitbook.io/oddsonchainprotocol/"
          >
            DOCS
          </a>


          <a
            className="p-2  mt-5 mr-25 font-bold lg:mt-14 mb-14 "
            
            target="_new"
            href="https://twitter.com/oddsonchain"
          >
            <img
              style={{  "width": '9%',
                "float": "right",
                "marginRight": "24%",
                "top": "0",
                "marginTop": "1%"  }}
              className=" "
              src="/assets/images/twitter.png"
            />
          </a>
    <br/>
          <button
            className="p-2 font-bold mt-4  truncate "
            style={{
              color: "#fff",
              backgroundColor: "#ea5729",
              width: "15rem",
            }}
            onClick={connect}
          >
            {isActive ? account : "connect to metamask"}
          </button>
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
                 basis-3/6"
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
                {ticketPrice / NUMBER_BASE || 0} {TOKEN_NAME}
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
                {totalPool} {TOKEN_NAME}
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
                {fees} %
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h1 className=" text-4xl text-center font-bold tracking-tight text-white">
              {"Buy tickets to bet on your team to win a share of the pot!"}
            </h1>
          </div>
        </div>

        <div className=" basis-1/4">
          <div className="flex flex flex-wrap m-2">
            <img
              className=" hidden md:block flex-auto"
              style={{ width: "15%", height: "30%" }}
              src="/assets/images/logo.png"
            />
            <img
              style={{ width: "30%", height: "30%" }}
              className=" hidden md:block flex-auto"
              src="/assets/images/worldcup_logo.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
