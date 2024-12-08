import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  const imageArr = [1, 2];
  return (
    <div className={styles.page}>
      <Carousel>
        {imageArr.map((img: number) => (
          <Image
            key={img}
            width={0}
            height={0}
            sizes="100vw"
            src={`/images/${img}.avif`}
            style={{ width: '100%', height: 'auto' }}
            alt={`${img}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
