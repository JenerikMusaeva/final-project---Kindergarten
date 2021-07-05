import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchGroups } from "../store/actions/groups";
import GroupGartenPage from "../components/main/GroupGartenPage";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function Garten() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.appstate);
  let { gartenid } = useParams();
  const { selectedGarten } = useSelector((state) => state.gartens);
  const { groups } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  let activeGartenGroups = groups.filter(
    (group) => +group.kinderGarden.id === +gartenid
  );

  return (
    <>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Главная</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Филиал</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {loading ? (
        <div> Загрузка филиала </div>
      ) : (
        <>
          <h3>Филиал {selectedGarten.name}</h3>
          <div>
            <p>{selectedGarten.description}</p>
            <address className="address-garten">
              Адрес филиала {selectedGarten.address}
            </address>

            <p>
              Контактный номер филиала{" "}
              <a href={`tel:+996${selectedGarten.contact}`}>
                0{selectedGarten.contact}
              </a>
            </p>
          </div>

          <h4>Список групп</h4>
          <div className="row">
            {activeGartenGroups.map((group) => (
              <GroupGartenPage data={group} key={group.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
