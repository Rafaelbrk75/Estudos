import Title from "./components/Title"
import Subtitle from "./components/Subtitle";
import StatusText from "./components/StatusText";
import styles from "./App.module.css";

export default function App() {

  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
