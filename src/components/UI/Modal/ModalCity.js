import styles from "./ModalCity.module.css";

const ModalCity = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.aligned}>
        <span className="material-icons">place</span>
        <p onClick={props.onClick}>Helsinki, Finland</p>
      </div>
      <div className={styles.aligned}>
        <span className="material-icons">place</span>
        <p onClick={props.onClick}>Turku, Finland</p>
      </div>
      <div className={styles.aligned}>
        <span className="material-icons">place</span>
        <p onClick={props.onClick}>Oulu, Finland</p>
      </div>
      <div className={styles.aligned}>
        <span className="material-icons">place</span>
        <p onClick={props.onClick}>Vaasa, Finland</p>
      </div>
    </div>
  );
};

export default ModalCity;
