import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteChild } from "../../store/actions/children";

export default function Child({ data }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let dispatch = useDispatch();

  return (
    <>
      <div className="child">
        <div className="row">
          <div className="col-8"> {data.fullName} </div>
          <div className="col-2">
            <i onClick={toggle} className="info-icon"></i>
          </div>
          <div className="col-2">
            <i onClick={() => dispatch(deleteChild(data.id))} className="delete-icon"></i>
          </div>
        </div>
      </div>

      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Информация о воспитаннике</ModalHeader>
          <ModalBody>
            <h6>{data.fullName}</h6>
            <p>Дата рождения: {data.birthDay.join('-')}</p>
            <p>Пол {data.gender}</p>
            <p>Родитель {data.parent}</p>
            <p>
              Номер телефона:
              <a href={`tel:+996${data.contact}`}>+ 996 {data.contact}</a>
            </p>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="btn-add" onClick={toggle}>
              Редактировать
            </Button> */}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    </>
  );
}
