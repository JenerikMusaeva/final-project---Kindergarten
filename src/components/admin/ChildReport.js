import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ChildReport({ data }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  console.log("report", data);

  return (
    <>
      <div className="child">
        <div className="row">
          <div className="col-6"> {data.fullName} </div>

          <div className="col-2 text-center">
            + {data.visits.filter((v) => v.visit).length}
          </div>

          <div className="col-2 text-center">
            - {data.visits.filter((v) => !v.visit).length}
          </div>

          <div className="col-2 text-center">
            <i onClick={toggle} className="report-icon"></i>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Информация о воспитаннике</ModalHeader>
        <ModalBody className='row'>
        <h5>Полный отчет</h5>

          <h6>{data.fullName}</h6>
          <p>
            Календарь посещений:
            {
              <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    {data.visits.map((v) => {
                      if (v.visit) {
                        return (
                          <th className="table-success vertical-text" scope="col" key={v.id}>
                            {v.date.join('/')}
                          </th>
                        );
                      } else {
                        return (
                          <th className="table-danger vertical-text" scope="col" n key={v.id}>
                            {v.date.join('/')}
                          </th>
                        );
                      }
                    })}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    {data.visits.map((v) => {
                      if (v.visit) {
                        return (
                          <th className="table-success" scope="row" key={v.id}>
                            +
                          </th>
                        );
                      } else {
                        return (
                          <th className="table-danger" scope="row" key={v.id}>
                            -
                          </th>
                        );
                      }
                    })}
                  </tr>
                </tbody>
              </table>
              </div>
            }
          </p>
          <div>
            <div className="">
              Посещений {data.visits.filter((v) => v.visit).length}
            </div>

            <div className="">
              Пропусков {data.visits.filter((v) => !v.visit).length}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
