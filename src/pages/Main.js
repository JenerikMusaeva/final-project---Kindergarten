import image from "../images/mother-and-daughter-drawing.jpeg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Garten from "../components/Garten";
import { fetchGartens } from "../store/actions/gartens";
import { Link } from "react-router-dom";

export default function Main() {
  let dispatch = useDispatch();

  let { loading, gartens } = useSelector((state) => state.gartens);

  useEffect(() => {
    dispatch(fetchGartens());
  }, []);

  return (
    <div className="main-page">
      <div className="main-banner"></div>

      <div className="row">

      {loading ? (
        <div> Загрузка филиалов </div>
      ) : (
        <>
            {gartens.map((garten) => (
              <Garten data={garten} key={garten.id} />
            ))}
        </>
      )}

        
      </div>
    </div>
  );
}
