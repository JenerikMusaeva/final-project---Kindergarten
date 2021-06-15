import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGarten } from "../store/actions/gartens";

export default function Garten( {name, address, contact} ) {
  let dispatch = useDispatch();

  let { gartenid } = useParams();
  let gartens = useSelector((state) => state.gartens);

  useEffect(() => {
    dispatch(fetchGarten(gartenid))
  })

  return(
    <>
    <h3>Филиал {name}</h3>
    <div>
      <address>Адрес {address} </address>
      <a href="tel:+1234567890"> 0 555 000 000 </ a>
    </div>

    <h4>Список групп</h4>


    </>
  )
}