import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Navbar from '../components/Navbar'; // Adjust the path based on your project structure

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
    <main className={styles.main}>
      <Spline scene="https://prod.spline.design/iy8Rx6VyeyBlBQra/scene.splinecode" />
    </main>
    </>
  );
}
