import { selectGroup } from "../../store/actions/groups";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Group({ data }) {
  let dispatch = useDispatch();

  return (
    <>
      <Link
        className="col-12 col-md-6"
        to={{ pathname: `/garten/${data.kinderGarden.id}/group/${data.id}` }}
      >
        <div
          onClick={() => {
            dispatch(selectGroup(data));
          }}
          className="group"
        >
          <div className="row p-3">
            <div className="col-6"> {data.name} </div>
            <div className="col-6 group-info-main"> {data.info} </div>
          </div>
        </div>
      </Link>
    </>
  );
}
