function Title(props: { status: boolean }) {
  return (
    <>
      <div
        className="
          top-curve
            header-card
            p-7 
            text-xl
            font-bold tracking-tight
           text-white"
        //  style={{ minWidth: '50rem', maxWidth: '50rem'}}
      >
        <div className="ml-5">
          {props.status !== false ? (
            <div className="">
              <h1 className="">
                CURRENT STATUS: TEAMS, TICKETS, WIN$ PER TICKET
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Title;
