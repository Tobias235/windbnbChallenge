import styles from "./ModalGuests.module.css";

const ModalGuests = (props) => {
  return (
    <div className={styles.guests}>
      <p>
        Adults
        <br />
        <span>Ages 13 and above</span>
      </p>
      <div>
        <button type="button" id="adultRemove" onClick={props.onClick}>
          -
        </button>
        <span>{props.adultValue}</span>
        <button type="button" id="adultAdd" onClick={props.onClick}>
          +
        </button>
      </div>
      <p>
        Children
        <br />
        <span>Ages 2-12</span>
      </p>
      <div>
        <button type="button" id="childRemove" onClick={props.onClick}>
          -
        </button>
        <span>{props.childValue}</span>
        <button type="button" id="childAdd" onClick={props.onClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default ModalGuests;
