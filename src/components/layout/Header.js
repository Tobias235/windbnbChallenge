import styles from "./Header.module.css";
import logo from "./../../assets/logo.svg";
import HeaderInputs from "./HeaderInputs";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <HeaderInputs
        guests={props.guests}
        city={props.city}
        onClick={props.onShowModal}
      />
    </div>
  );
};

export default Header;
