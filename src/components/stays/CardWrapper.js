import styles from "./CardWrapper.module.css";
import Card from "../UI/Card";

const CardWrapper = ({ places }) => {
  return (
    <div className={styles.cardContainer}>
      {places.map((place) => {
        return (
          <Card
            key={Math.random()}
            superHost={place.superHost}
            title={place.title}
            rating={place.rating}
            type={place.type}
            beds={place.beds}
            photo={place.photo}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
