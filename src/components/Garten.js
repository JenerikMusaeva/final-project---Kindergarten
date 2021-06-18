import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchGarten } from "../store/actions/gartens";

export default function Garten({ data }) {
  let dispatch = useDispatch();

  return (
    <>
      <Link
        to={{ pathname: `/${data.id}` }}
        className="col-4"
        onClick={() => dispatch(fetchGarten(data.id))}
      >
        <div className="branch">
          <img className="branch-img" src={data.image.url} />
          <div className="branch-title">
            <h3>{data.name}</h3>
            <p>{data.address}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
