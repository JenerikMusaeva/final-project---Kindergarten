import { Link }  from "react-router-dom"

export default function Garten({ data }) {

  return (
    <>
    <Link to='/:gartenid' className="col-4">
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
