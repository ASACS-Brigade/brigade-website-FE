import type { CSSProperties } from "react";
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
        <div
          className={styles.tile}
          key={`${photo.src}-${photo.objectPosition}-${index}`}
          style={{ "--photo-src": `url("${photo.src}")` } as CSSProperties}
        >
          <Image
            src={photo.src}
            alt=""
            fill
            priority={index < 4}
            unoptimized={photo.src.startsWith("https://ik.imagekit.io/")}
            quality={58}
            sizes="(min-width: 1280px) 16.7vw, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 33.3vw"
            className={`${styles.photo} ${toneClasses[photo.tone]}`}
            style={{ objectPosition: photo.objectPosition }}
          />
        </div>
      ))}
    </div>
  );
}
