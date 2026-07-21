import Container from "../../components/layout/container";
import ArtGallery from "../../components/sections/gallery/art-gallery";
import GalleryCategories from "../../components/sections/gallery/gallery-categories";
import GallerySlider from "../../components/sections/gallery/gallery-slider";
import CtaBanner from "../../components/shared/ctaBanner";


export default function GalleryPage() {
  return (
    <main>
      <Container>
        <GallerySlider />
      </Container>


      <GalleryCategories />

      <ArtGallery />
      <CtaBanner
        heading="Get Involved Today By Donating"
        subheading="Join our community and make an impact."
        buttonLabel="Register Interest"
        buttonHref="/register"
      />
    </main>
  );
}
