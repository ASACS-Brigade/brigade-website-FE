import styles from "./AnniversaryIntro.module.css";

type SkipIntroButtonProps = {
  onSkip: () => void;
};

export default function SkipIntroButton({ onSkip }: SkipIntroButtonProps) {
  return (
    <button
      type="button"
      onClick={onSkip}
      className={styles.skipButton}
      aria-label="Skip Golden Jubilee introduction"
    >
      Skip Intro
    </button>
  );
}
