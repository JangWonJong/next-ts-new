import Link from "next/link";

import styles from "@/styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/board'>게시판</Link> </li>        


      </ul>
    </nav>
  );
};