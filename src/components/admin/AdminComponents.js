import Groups from "../Groups";
import Children from "../Children";
import Report from "../Report";
import Attendance from "../Attendance";
import AddGroup from "../AddGroup";
import AddChild from "../AddChild";

export default function AdminComponent({ path }) {
  return (
    <>
      {path == "groups" && <Groups />}
      {path == "children" && <Children />}
      {path == "report" && <Report />}
      {path == "attendance" && <Attendance />}
      {path == "addgroup" && <AddGroup />}
      {path == "addchild" && <AddChild />}
    </>
  );
}
