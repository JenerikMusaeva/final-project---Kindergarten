import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import img0 from "../images/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpeg";
import img1 from "../images/schoolchildren-having-fun.jpeg";
import img2 from "../images/classmates-playing-after-school.jpeg";
import img3 from "../images/playful-classmates-having-fun-on-playground.jpeg";
import img4 from "../images/funny-starts-kids-fashion-concept-the-group-of-teen-boys-and-girls-running-at-park.jpeg";

export default function Group() {
  const { selectedGroup } = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Главная</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/garten/:gartenid">Филиал</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Группа</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">
        <div className="group-sidebar col-12 col-md-3">
          <div className="kindergartener-info">
            <div className="kindergartener-avatar">
              <img
                className="kindergartener-foto"
                src={selectedGroup.image.url}
              />
            </div>
            <h6>Воспитатель</h6>
            <p> {selectedGroup.teacherFullName}</p>
          </div>
          <div className="daily-regime">
            <h5>Режим дня</h5>
            <p>
              <span>Прием детей</span> 7.00 – 8.00
            </p>
            <p>
              <span>Завтрак</span> 8.30 – 9.00
            </p>
            <p>
              <span>Занятия</span> 9.00 – 10.00
            </p>
            <p>
              <span>Прогулка</span> 10.00 – 12.00
            </p>
            <p>
              <span>Обед</span> 12.00 – 13.00
            </p>
            <p>
              <span>Тихий час</span> 13.00 – 15.00
            </p>
            <p>
              <span>Полдник</span> 15.00 – 15.30
            </p>
            <p>
              <span>Прогулка</span> 15.30 – 17.00
            </p>
            <p>
              <span>Ужин</span> 17.00 – 17.30
            </p>
            <p>
              <span>Уход домой</span> 18.00 – 18.30
            </p>
          </div>
        </div>

        <div className="col-9">
          <h3> {selectedGroup.name}</h3>
          <div className="group-info">
            <p>{selectedGroup.info}</p>
            <p>Группы до 15 человек. График работы с 7:00-18:30. МЫ ПРЕДЛАГАЕМ: сбалансированное 4-х разовое питание, программы дошкольного и дополнительного образования, предшкольная подготовка, изучение языков (английский язык, кыргызский язык), эстетическое и нравственное воспитание, художественное и музыкальное развитие, развивающие занятия (лепка, пальчиковые игры, рисование, аппликация), постановки в кукольном театре.</p>
          </div>
          <div className="group-slider ">
            <Slider className="slider-group" {...settings}>
              <div className="slider-conteiner">
                <img className="slider-image" src={img1} />
              </div>
              <div className="slider-conteiner">
                <img className="slider-image" src={img2} />
              </div>
              <div className="slider-conteiner">
                <img className="slider-image" src={img3} />
              </div>
              <div className="slider-conteiner">
                <img className="slider-image" src={img4} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
