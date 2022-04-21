import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Portfolio from "./Portfolio.js";

export default function Home() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
