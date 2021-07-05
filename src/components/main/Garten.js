import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectGarten } from "../../store/actions/gartens";

export default function Garten({ data }) {
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectGarten(data));
  };
  return (
    <>
      <Link to={{ pathname: `garten/${data.id}` }} className="col-4">
        <div onClick={handleClick} className="garten">
          <img className="garten-img" src={data.image.url} />
          <div className="garten-title">
            <h3>{data.name}</h3>
            <p>Адрес: {data.address}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
