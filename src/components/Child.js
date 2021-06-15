export default function Child({data}) {
  return (
    <>
    <div className="child">
      <div className="row">
        <div className="col-8"> {data.name} </div>
        <div className="col-2"> <i className='info-icon'></i> </div>
        <div className="col-2"> <i className='delete-icon'></i> </div>
      </div>
    </div>
    </>
  )}