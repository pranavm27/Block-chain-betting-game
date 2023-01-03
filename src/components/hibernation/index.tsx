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
      <div className="flex-row-reverse flex-wrap lg:flex md:flex-none ">
        <div className="basis-1/4 ">
          <a
            className="flex-auto p-2 mt-5 font-bold no-underline lg:mt-14 mb-14"
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
            className="p-2 mt-5 font-bold mr-25 lg:mt-14 mb-14 "
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
              className=""
              src="/assets/images/twitter.png"
            />
          </a>

        </div>



        <div className=" basis-2/6">
          <div className="flex flex-wrap m-2">
            <>
              <img
                className="mt-10 md:block"
                style={{ width: "25%", height: "20%" }}
                src={`/assets/images/${LOGO[1]}`}
              />
            </>
          </div>
        </div>
      </div>



      <div className="mt-52"
        style={{ minHeight: "30rem" }}>
        <div
          className=" md:h-26 lg:h-26 sm:h-26 basis-1/2"

        >

        </div>
        <div
          className=" md:w-8/12 lg:w-10/12 sm:w-10/12"
          style={{ margin: "auto", padding: "10px" }}

        >
          <div className="flex flex-wrap ">
            <div className="flex-auto ">
              <div
                className="text-xl font-bold tracking-tight text-white top-curve header-card bottom-curve p-7"
              //  style={{ minWidth: '50rem', maxWidth: '50rem'}}
              >
                <div className="ml-5">
                  <div className="flex-auto">
                    <p
                      className="font-bold text-center text-gray-400 md:text-3xl lg:text-5xl sm:text-3xl "
                      style={{ color: STYLE.secondaryTextColor }}
                    >
                      Congratulations winners!
                    </p>
                  </div>
                  <div className="flex-auto">

                    <p
                      className="font-bold text-center text-gray-400 md:text-4xl lg:text-4xl sm:text-4xl "
                      style={{ color: STYLE.ternaryTextColor }}
                    >
                      Odds on chain will return soon!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap-reverse ">
            <div className="flex-auto ">
              {/* <Teams></Teams> */}
            </div>
            <div className="flex-auto ">
              {/* <Tickets></Tickets> */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Header;
