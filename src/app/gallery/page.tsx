import Container from "../../components/layout/container";
import ArtGallery from "../../components/sections/gallery/art-gallery";
import GalleryCategories from "../../components/sections/gallery/gallery-categories";
import GallerySlider from "../../components/sections/gallery/gallery-slider";
import CtaBanner from "../../components/shared/ctaBanner";
import { getGalleryData } from "../../lib/content-api";


export default async function GalleryPage() {
  const { cards, images } = await getGalleryData();

  return (
    <main>
      <Container>
        <GallerySlider />
      </Container>


      <GalleryCategories categories={cards} />

      <ArtGallery images={images} />
      <CtaBanner
        heading="Get Involved Today By Donating"
        subheading="Join our community and make an impact."
        buttonLabel="Register Interest"
        buttonHref="/register"
      />
    </main>
  );
}
