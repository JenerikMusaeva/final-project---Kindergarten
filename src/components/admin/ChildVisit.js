export default function ChildVisit({ data }) {
  return (
    <>
      <div className="child">
        <div className="row">
          <div className="col-8"> {data.fullName} </div>
          <div className="col-2">
            {/* <label className="form-check-label" for="visitChild">
              Присутсвовал
            </label> */}
            <input
              // checked
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
