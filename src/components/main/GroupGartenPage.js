import { fetchGroup, selectGroup } from "../../store/actions/groups";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Group({ data }) {
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectGroup(data))
  }

  return (
    <>
      <Link
        to={{ pathname: `garten${data.kinderGarden.id}/group${data.id}` }}
        // to={{ pathname: `/${data.id}` }}
        className="col-4"
        // onClick={() => dispatch(fetchGroup(data.id))}
      >
        <div onClick={handleClick} className="group">
          <div className="row col-6 p-3">
            <div className="col-6"> {data.name} </div>
            <div className="col-6"> {data.info} </div>


          </div>
        </div>
      </Link>
    </>
  );
}
