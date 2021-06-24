import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteGroup } from "../../store/actions/groups";

export default function Group({ data }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let dispatch = useDispatch();

  
  return (
    <>
      <div className="group">
        <div className="row">
          <div className="col-8"> {data.name} </div>
          <div className="col-2">
            <i onClick={toggle} className="info-icon"></i>
          </div>
          <div className="col-2">
            <i onClick={() => {dispatch(deleteGroup(data.id))}} className="delete-icon"></i>
          </div>
        </div>
      </div>

      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Информация о группе</ModalHeader>
          <ModalBody>
            <h6>{data.name}</h6>
            <p>Воспитатель {data.teacherFullName}</p>
            <p>{data.info}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" className="btn-add" onClick={toggle}>
              Редактировать
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
