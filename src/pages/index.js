import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Todo from "../../components/Todo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo-Max</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Todo />
      </main>
    </>
  );
}
