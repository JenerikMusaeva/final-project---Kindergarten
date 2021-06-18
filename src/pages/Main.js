import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Garten from "../components/Garten";
import { fetchGartens } from "../store/actions/gartens";

export default function Main() {
  const dispatch = useDispatch();

  const {
    gartens: { loading: gartensLoading, value: gartens },
  } = useSelector((state) => state.gartens);

  useEffect(() => {
    dispatch(fetchGartens());
  }, []);

  useEffect(() => {
console.log(gartens)
  }, [gartensLoading])

  return (
    <div className="main-page">
      <div className="main-banner"></div>
      <div className="row">
        { gartensLoading ? (
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
