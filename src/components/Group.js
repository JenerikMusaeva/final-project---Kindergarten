export default function Group({data}) {
  return (
    <>
    <div className="group">
      <div className="row">
        <div className="col-8"> {data.name} </div>
        <div className="col-2"> <i className='info-icon'></i> </div>
        <div className="col-2"> <i className='delete-icon'></i> </div>
      </div>
    </div>
    </>
  )}