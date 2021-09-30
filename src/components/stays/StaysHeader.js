import styles from "./StaysHeader.module.css";

const MainHeader = ({ places, city }) => {
  const isCity = city ? city : "Finland";
  return (
    <div className={styles.main}>
      <h1>Stays in {isCity} </h1>
      <span>Stays: {places.length}</span>
    </div>
  );
};

export default MainHeader;
