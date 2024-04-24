import styles from "./page.module.css";

export default function Home() {
  console.log(process.env)
  return (
    <main className={styles.main}>
    
      <h2>This is Home Page</h2>
    </main>
  );
}
