import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Garten from "../components/main/Garten";
import { fetchGartens } from "../store/actions/gartens";

export default function Main() {
  const dispatch = useDispatch();

  const { gartens } = useSelector((state) => state.gartens);

  const { loading } = useSelector((state) => state.appstate);

  useEffect(() => {
    dispatch(fetchGartens());
  }, []);

  return (
    <div className="main-page">
      <div className="main-banner"></div>
      <div className="row main-garten">
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
