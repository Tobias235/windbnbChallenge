import { Fragment, useState } from "react";

import styles from "./Modal.module.css";
import Button from "./../UI/Button";
import ModalGuests from "./Modal/ModalGuests";
import ModalCity from "./Modal/ModalCity";

const Modal = (props) => {
  const [showLocation, setShowLocation] = useState(true);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [place, setPlace] = useState("Finland");

  const handleClick = () => {
    showLocation ? setShowLocation(false) : setShowLocation(true);
  };

  const handleCity = (e) => {
    const city = e.target.innerHTML;
    setPlace(city);
  };

  const handleGuests = (e) => {
    const id = e.target.id;

    if (id === "adultAdd") {
      let adultValue = adultQuantity;
      adultValue = adultValue + 1;
      setAdultQuantity(adultValue);
    }

    if (id === "adultRemove" && adultQuantity > 0) {
      let adultValue = adultQuantity;
      adultValue = adultValue - 1;
      setAdultQuantity(adultValue);
    }

    if (id === "childAdd") {
      let childValue = childrenQuantity;
      childValue = childValue + 1;
      setChildrenQuantity(childValue);
    }

    if (id === "childRemove" && childrenQuantity > 0) {
      let childValue = childrenQuantity;
      childValue = childValue - 1;
      setChildrenQuantity(childValue);
    }
  };

  const total = childrenQuantity + adultQuantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.place = place;
    data.people = total;
    props.search(data);
  };

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <div className={styles.modal}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <Button
            className={styles.btnForm}
            modalClass={styles.iconBtn}
            location={place}
            guests={total}
            search="Search"
            type="button"
            onClick={handleClick}
          ></Button>
          {showLocation && <ModalCity onClick={handleCity} />}
          {!showLocation && (
            <ModalGuests
              childValue={childrenQuantity}
              adultValue={adultQuantity}
              onClick={handleGuests}
            />
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default Modal;
