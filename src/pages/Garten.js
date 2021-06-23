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
    selectedGarten: { loading: gartenLoading, value: selectedGarten },
  } = useSelector((state) => state.gartens);

  const {
    groups: { loading: groupsLoading, value: groups },
  } = useSelector((state) => state.groups);

  useEffect(() => {
    // dispatch(fetchGarten(gartenid));
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
          <h3>Филиал {selectedGarten.name}</h3>
          <div>
            <address className="address-garten">
              Адрес филиала {selectedGarten.address}{" "}
            </address>
            <p>
              Контактный номер филиала{" "}
              <a href={`tel:+996${selectedGarten.contact}`}>
                + 996 {selectedGarten.contact}{" "}
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
