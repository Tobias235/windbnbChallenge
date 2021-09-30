import styles from "./HeaderInputs.module.css";
import Button from "./../UI/Button";
const HeaderInputs = (props) => {
  const guests = props.guests ? props.guests : "Add Guests";
  const city = props.city ? props.city : "Finland";

  return (
    <Button
      className={styles.btnForm}
      location={city}
      guests={guests}
      onClick={props.onClick}
    ></Button>
  );
};

export default HeaderInputs;
