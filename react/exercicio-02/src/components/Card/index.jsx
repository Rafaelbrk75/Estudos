
import styles from "./styles.module.css"
import Button from "../Button"

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={props.posterImg} alt="Star Wars poster" />
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
        <Button />
      </div>
    </div>
  )
}