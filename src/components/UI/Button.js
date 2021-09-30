import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={`${styles.btnContainer} ${props.className}`}>
      <button type={props.type} onClick={props.onClick}>
        {props.location}
      </button>
      <button
        type={props.type}
        value={props.guests}
        onClick={props.onClick}
        className={styles.border}
      >
        {props.guests}
      </button>
      <div>
        <button type="submit" className={props.modalClass}>
          <span className={"material-icons"}>search</span>
          {props.search}
        </button>
      </div>
    </div>
  );
};

export default Button;
