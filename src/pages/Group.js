import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGroup } from "../store/actions/groups";
import { useEffect } from "react";

export default function Group() {

  const dispatch = useDispatch();
  let { groupid } = useParams();

  const {
    activeGroup: { loading: groupLoading, value: group },
  } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGroup(groupid));
  }, []);

  return (
    <>
      <div className="row">
        <div className="group-sidebar col-3">
          <div className="kindergartener-info">
            <div className="kindergartener-avatar">
              <img
                className="kindergartener-foto"
                src="https://image.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg"
              />
            </div>
            <h6>Воспитатель</h6>
            <p> Нина Васильевна</p>
          </div>
          <div className="daily-regime">
            <h5>Режим дня</h5>
            <p>
              <span>Прием детей</span> 7.00 – 8.00
            </p>
            <p>
              <span>Завтрак</span> 8.30 – 9.00
            </p>
            <p>
              <span>Занятия</span> 9.00 – 10.00
            </p>
            <p>
              <span>Прогулка</span> 10.00 – 12.00
            </p>
            <p>
              <span>Обед</span> 12.00 – 13.00
            </p>
            <p>
              <span>Тихий час</span> 13.00 – 15.00
            </p>
            <p>
              <span>Полдник</span> 15.00 – 15.30
            </p>
            <p>
              <span>Прогулка</span> 15.30 – 17.00
            </p>
            <p>
              <span>Ужин</span> 17.00 – 17.30
            </p>
            <p>
              <span>Уход домой</span> 18.00 – 18.30
            </p>
          </div>
        </div>

        <div className="col-9">
          <h3>Группа {}</h3>
          <div className="group-info">
            <p>
              Для деток 3-6 лет, для которых мини-садик – это подготовка к
              детскому саду полного дня. Для деток, которым нужен более
              индивидуальный подход, чем это может обеспечить детский сад
              полного дня Для деток, которым скоро в школу, а качество занятий в
              детском саду не устраивает. Для деток с индивидуальными
              особенностями в питании, для которых детсадовская еда не
              приемлема. Для деток, которые часто болеют в обычном садике. Не
              продолжительное пребывание с маленьким количеством других детей
              минимизирует риск заболеваний.
            </p>
          </div>
          <div className="group-slider"></div>
        </div>
      </div>
    </>
  );
}
