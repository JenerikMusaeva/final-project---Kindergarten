export default function ChildVisit({ data, visitChildren, setVisitChildren }) {
  const childVisited = visitChildren.includes(data.id);

  return (
    <>
      <div className="child">
        <div className="row">
          <div className="col-10"> {data.fullName} </div>
          <div className="col-2">
            <input
              checked={childVisited}
              onChange={(event) => {
                event.target.checked
                  ? setVisitChildren([...visitChildren, data.id])
                  : setVisitChildren(
                      visitChildren.filter((childId) => childId !== data.id)
                    );
              }}
              className="form-check-input"
              type="checkbox"
              value="false"
              name="visit"
              id="visitChild"
            />
          </div>
        </div>
      </div>
    </>
  );
}
