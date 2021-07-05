import { useState, useEffect } from "react";
import { BASE_URL } from "../../store/constants/url";
import {
  fetchChildren,
  reportChildrenAction,
} from "../../store/actions/children";
import { fetchGartens } from "../../store/actions/gartens";
import { fetchGroups } from "../../store/actions/groups";
import { useDispatch, useSelector } from "react-redux";
import ChildReport from "./ChildReport";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchEnd, fetchStart } from "../../store/actions/appstate";
import { REPORT_CHILDREN_FAILURE } from "../../store/actions/types";
import { bindActionCreators } from "redux";

export default function Report() {
  let dispatch = useDispatch();
  const { loading } = useSelector((state) => state.appstate);
  const { error } = useSelector((state) => state.children);
  const { groups } = useSelector((state) => state.groups);
  const { gartens } = useSelector((state) => state.gartens);
  const [selectedGarten, setSelectedGarten] = useState("-1");
  const [selectedGroup, setSelectedGroup] = useState("-1");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedGroupArray, setSelectedGroupArray] = useState([]);
  let [filteredChildren, setFilteredChildren] = useState([]);
  let [search, setSearch] = useState("");
  let monthReport = startDate.getMonth() + 1;
  let [visitChildren, setVisitChildren] = useState([]);
  let [childrenVisits, setChildrenVisits] = useState([]);

  useEffect(() => {
    dispatch(fetchGartens());
    dispatch(fetchGroups());
    dispatch(fetchChildren());
  }, []);

  useEffect(() => {
    console.log("VISIT1234", visitChildren);
    let childrenOfGroup = [
      ...new Set(visitChildren?.map(({ child }) => child.fullName)),
    ];

    let _childrenVisits = [];

    for (let child of childrenOfGroup) {
      let _visits = visitChildren.filter((vc) => vc.child.fullName === child);

      _childrenVisits = [
        ..._childrenVisits,
        { fullName: child, visits: _visits },
      ];
    }

    setChildrenVisits(_childrenVisits);
  }, [visitChildren]);

  useEffect(() => {
    setFilteredChildren(
      childrenVisits.filter((child) => {
        let searchStr = search.toLowerCase();
        let childName = child.fullName.toLowerCase();
        return childName.indexOf(searchStr) > -1;
      })
    );
  }, [childrenVisits, search]);

  useEffect(() => {
    setSelectedGroupArray(() => {
      if (selectedGarten === "-1") return groups;
      return groups.filter((g) => g.kinderGarden.id === Number(selectedGarten));
    });
  }, [selectedGarten]);

  const handleSubmit = (e) => {
    dispatch(fetchStart());

    if (selectedGroup === "-1") {
      alert("Не выбрана группа");
      return false;
    }

    e.preventDefault();
    let request = {
      method: "POST",
      body: JSON.stringify({
        groupId: selectedGroup,
        month: monthReport,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${BASE_URL}/visits/month/`, request)
      .then((r) => {
        if (r.ok) return r.json();
        throw new Error("Нет отметок посещений!");
      })
      .then((data) => {
        dispatch(reportChildrenAction(data));
        setVisitChildren(data);
      })
      .catch((error) => {
        alert(error.message);
        dispatch({ type: REPORT_CHILDREN_FAILURE, error: error });
      })
      .finally(() => {
        dispatch(fetchEnd());
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleChangeGarten = (e) => {
    setSelectedGarten(e.target.value);
  };
  const handleChangeGroup = (e) => {
    setSelectedGroup(e.target.value);
  };

  return (
    <>
      <h4>Отчет</h4>
      <div>
        <div className="row">
          <div className="col-4">
            <p>Выберите месяц</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              showTwoColumnMonthYearPicker
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4">
            <p>Выберите филиал</p>
            <select
              onChange={handleChangeGarten}
              disabled={loading}
              className="form-select col-1"
            >
              <option value="-1">Все</option>
              {gartens.map((garten) => {
                return (
                  <option key={garten.id} value={garten.id}>
                    {garten.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-12 col-md-4">
            <p>Выберите группу</p>
            <select
              onChange={handleChangeGroup}
              disabled={loading}
              className="form-select col-1"
            >
              <option value="-1">Все</option>
              {selectedGroupArray.map((group) => {
                return (
                  <option value={group.id} key={group.id}>
                    {group.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="col-12 col-md-8">
            <input
              className="form-control col-12 mr-3 mb-3"
              onChange={handleSearch}
              type="text"
              name="findChild"
              value={search}
              placeholder="Поиск воспитанника"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={selectedGroup === "-1"}
        className="btn btn-add"
      >
        Получить список группы
      </button>
      {selectedGarten === "-1" && selectedGroup === "-1" && (
        <p>Выберите филиал и группу</p>
      )}

      {loading ? (
        <div> Загрузка воспитанников </div>
      ) : (
        <>
          <h4>Список воспитанников</h4>
          {/* {!visitChildren.length && (
            <div className="alert alert-danger">
              В этом месяце нет отметок посещений!
            </div>
          )} */}
          <div>
            {filteredChildren.map((child) => (
              <ChildReport data={child} key={child.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
