import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Garten() {

  const {
    activeGarten: { loading: gartenLoading, value: activeGarten },
  } = useSelector((state) => state.activeGarten); 
  
  useEffect(() => {
    console.log(activeGarten)
  })

  return (
    <>
      {/* {gartenLoading ? ( */}
        <div> Загрузка групп </div>
      {/* ) : ( */}
        <>
          {/* <h3>Филиал {activeGarten.name}</h3> */}
          {/* <div>
            <address>Адрес {activeGarten.address} </address>
            <a href="tel:+1234567890"> 0 555 000 000 </a>
          </div> */}

          <h4>Список групп</h4>
        </>
      {/* )} */}
    </>
  );
}
