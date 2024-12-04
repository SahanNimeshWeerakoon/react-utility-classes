import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  const imageArr = [1, 2, 3, 4];
  return (
    <div className={styles.page}>
      <Carousel>
        {imageArr.map((img: number) => (
          <Image width={100} height={200} src={`/images/${img}.avif`} alt={`${img}`} />
        ))}
      </Carousel>
    </div>
  );
}
