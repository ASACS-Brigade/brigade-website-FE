export type AnniversaryPhotoTone = "deep" | "standard" | "lifted";

export type AnniversaryPhoto = {
  src: string;
  alt: string;
  objectPosition: string;
  tone: AnniversaryPhotoTone;
};
