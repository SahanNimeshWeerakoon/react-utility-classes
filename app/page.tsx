import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel>
        <div>
          one
        </div>
        <div>
          two
        </div>
        <div>
          three
        </div>
      </Carousel>
    </div>
  );
}
