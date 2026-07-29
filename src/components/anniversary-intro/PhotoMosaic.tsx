import Image from "next/image";
import { anniversaryPhotos } from "./anniversary-photos";
import styles from "./AnniversaryIntro.module.css";

const toneClasses = {
  deep: styles.toneDeep,
  standard: "",
  lifted: styles.toneLifted,
};

export default function PhotoMosaic() {
  return (
    <div className={styles.mosaic} aria-hidden="true">
      {anniversaryPhotos.map((photo, index) => (
        <div className={styles.tile} key={`${photo.src}-${photo.objectPosition}-${index}`}>
          <Image
            src={photo.src}
            alt=""
            fill
            priority={index < 8}
            quality={58}
            sizes="(min-width: 1280px) 12.5vw, (min-width: 1024px) 14.3vw, (min-width: 768px) 16.7vw, 25vw"
            className={`${styles.photo} ${toneClasses[photo.tone]}`}
            style={{ objectPosition: photo.objectPosition }}
          />
        </div>
      ))}
    </div>
  );
}
