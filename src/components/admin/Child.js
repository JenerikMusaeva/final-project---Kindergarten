import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Child({data}) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
    <div className="child">
      <div className="row">
        <div className="col-8"> {data.fullName} </div>
        <div className="col-2"> <i onClick={toggle} className='info-icon'></i> </div>
        <div className="col-2"> <i className='delete-icon'></i> </div>
      </div>
    </div>

    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Информация о воспитаннике</ModalHeader>
        <ModalBody>
          <h6>{data.fullName}</h6>
          <p>Возраст {data.age}</p>
          <p>Пол {data.gender}</p>
          <p>Родитель {data.parent}</p>
          <p>{data.contact}</p>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="btn-add" onClick={toggle}>Редактировать</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  )}