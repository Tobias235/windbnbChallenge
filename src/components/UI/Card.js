import styles from "./Card.module.css";

const Card = ({ superHost, title, rating, type, beds, photo }) => {
  return (
    <main className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImg} src={photo} alt="stayPhoto" />
      </div>
      <div className={styles.rating}>
        {superHost && <p className={styles.superHost}>Super Host</p>}
        <div>
          <p className={styles.textFont}>
            {type}, {beds} beds
          </p>
        </div>
        <div className={styles.centered}>
          <span className="material-icons">grade</span>
          <span>{rating}</span>
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </main>
  );
};

export default Card;
