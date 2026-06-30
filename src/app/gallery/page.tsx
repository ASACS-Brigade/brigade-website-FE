import Container from "../../components/layout/container";
import ArtGallery from "../../components/sections/gallery/art-gallery";
import GalleryCategories from "../../components/sections/gallery/gallery-categories";
import GallerySlider from "../../components/sections/gallery/gallery-slider";
// import GalleryFeaturedSlider from "../../components/sections/gallery/expandable-gallery";
// import ExpandableGallery from "../../components/sections/gallery/expandable-gallery";
// import GalleryCategories from "../../components/sections/gallery/gallery-categories";
// import GalleryGrid from "../../components/sections/gallery/gallery-grid";
// import GalleryTimeline from "../../components/sections/gallery/gallery-timeline";

export default function GalleryPage() {
  return (
    <main>
      <Container>
  <GallerySlider />
      </Container>


     <GalleryCategories />

     <ArtGallery />
        {/* <ExpandableGallery />
        <GalleryCategories />
        <GalleryTimeline />  
        <GalleryGrid /> */}
        {/* <GalleryFeaturedSlider />     */}
    </main>
  );
}
