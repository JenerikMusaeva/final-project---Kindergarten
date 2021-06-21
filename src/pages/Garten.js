import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchGroups } from "../store/actions/groups";
import { fetchGarten } from "../store/actions/gartens";
import GroupGartenPage from "../components/main/GroupGartenPage";

export default function Garten() {
  const dispatch = useDispatch();

  let { gartenid } = useParams();

  const {
    activeGarten: { loading: gartenLoading, value: activeGarten },
  } = useSelector((state) => state.gartens);

  const {
    groups: { loading: groupsLoading, value: groups },
  } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGarten(gartenid));
    dispatch(fetchGroups());
  }, []);

  let activeGartenGroups = groups.filter(
    (group) => +group.kinderGarden.id === +gartenid
  );

  return (
    <>
      {gartenLoading ? (
        <div> Загрузка групп </div>
      ) : (
        <>
          <h3>Филиал {activeGarten.name}</h3>
          <div>
            <address className="address-garten">
              Адрес филиала {activeGarten.address}{" "}
            </address>
            <p>
              Контактный номер филиала{" "}
              <a href={`tel:+996${activeGarten.contact}`}>
                + 996 {activeGarten.contact}{" "}
              </a>
            </p>
          </div>

          <h4>Список групп</h4>
          <div>
            {activeGartenGroups.map((group) => (
              <GroupGartenPage data={group} key={group.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
