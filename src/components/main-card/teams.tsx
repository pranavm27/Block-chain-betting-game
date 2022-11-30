import { STYLE } from "@/config/config";
import useMetaMask from "../../hooks/useMeta";

function Teams() {
  const { allTicketForTeam } = useMetaMask();

  return (
    <>
      <div
        className="
            header-card
            opacity-75
            p-12
            lg:text-2xl
            font-bold   text-white
            sm:rounded-b md:rounded-none lg:rounded-bl-3xl xl:rounded-bl-3xl

            "
        style={{ minHeight: "43rem", minWidth: "41rem" }}
      >
        <div className="grid grid-cols-2 ">
          {allTicketForTeam.map((item: any) => {
            return (
              <div className="grid grid-cols-2 gap-3 ">
                <label className="">{item?.team}</label>
                <label style={{ color: STYLE.secondaryTextColor }} className="col-span-1">
                  <span className="mr-3">x{item?.tickets}</span>
                  <span>{item?.win}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Teams;
