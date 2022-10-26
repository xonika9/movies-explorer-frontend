import './Promo.css';

import PromoImage from '../../images/promo-image.png';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__image" src={PromoImage} alt="Узоры" />
    </section>
  );
}

export default Promo;
