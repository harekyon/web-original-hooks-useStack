import useStack from "@/hooks/useStack";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [stack, action] = useStack();
  return (
    <>
      <main className={styles.main}>
        <button onClick={() => action({ type: "push", item: "はれぽこ" })}>
          pushするよ
        </button>
        <button onClick={() => action({ type: "pop" })}>popするよ</button>
        <button onClick={() => action({ type: "remove" })}>全消しするよ</button>
        {stack.map((s, idx) => {
          return <div>{`${s}${idx}`}</div>;
        })}
      </main>
    </>
  );
}
