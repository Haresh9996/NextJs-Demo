import styles from "./page.module.css";

export default function Home() {
  // console.log(process.env)
  return (
    <main className={styles.main}>

      <h2 className="text-center">This is Home Page</h2>
      <h1 className="text-center mt-4"> {process.env.SERVER_URL} </h1>
    </main>
  );
}
