import {
  DOCS,
  NUMBER_BASE,
  TOKEN_NAME,
  TWITTER,
  STYLE,
  LOGO,
} from "@/config/config";
import useMetaMask from "../../hooks/useMeta";

function Header() {
  const { connect, isActive, account, ticketPrice, totalPool, fees } =
    useMetaMask();

  return (
    <>
      <div className="lg:flex md:flex-none flex-wrap flex-row-reverse ">
        <div className="basis-1/4  	">
          <a
            className=" no-underline flex-auto p-2  mt-5  font-bold lg:mt-14 mb-14 "
            style={{
              color: STYLE.primaryTextColor,
              backgroundColor: STYLE.gradientPrimary,
            }}
            target="_new"
            href={DOCS}
          >
            DOCS
          </a>
          <a
            className="p-2  mt-5 mr-25 font-bold lg:mt-14 mb-14 "
            target="_new"
            href={TWITTER}
          >
            <img
              style={{
                width: "6%",
                marginLeft: "5%",
                top: "0",
                marginTop: "1%",
                display: "inline",
              }}
              className=" "
              src="/assets/images/twitter.png"
            />
          </a>
          <br />
          <button
            className="p-2 font-bold mt-4  truncate "
            style={{
              color: STYLE.primaryTextColor,
              backgroundColor: STYLE.secondaryColor,
              width: "15rem",
              display: "inline",
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
                style={{ color: STYLE.secondaryTextColor }}
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
                style={{ color: STYLE.ternaryTextColor }}
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
                style={{ color: STYLE.secondaryTextColor }}
              >
                {fees} %
              </p>
            </div>
          </div>
        </div>

        <div className=" basis-1/4">
          <div className="flex  flex-wrap m-2">
            {LOGO.map((item) => {
              return (
                <>
                  <img
                    className=" hidden md:block flex-auto mt-10"
                    style={{ width: "15%", height: "20%" }}
                    src={`/assets/images/${item}`}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
