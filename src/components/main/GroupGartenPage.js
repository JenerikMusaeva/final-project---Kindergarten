import { fetchGroup } from "../../store/actions/groups";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Group({ data }) {
  let dispatch = useDispatch();

  return (
    <>
      <Link
        to={{ pathname: `/${data.id}` }}
        className="col-4"
        // onClick={() => dispatch(fetchGroup(data.id))}
      >
        <div className="group">
          <div className="row col-6">
            <div className="col-6"> {data.name} </div>
          </div>
        </div>
      </Link>
    </>
  );
}
