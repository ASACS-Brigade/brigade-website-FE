import Container from "../../components/layout/container";
import GalleryCategories from "../../components/sections/gallery/gallery-categories";
// import GalleryFeaturedSlider from "../../components/sections/gallery/expandable-gallery";
// import ExpandableGallery from "../../components/sections/gallery/expandable-gallery";
// import GalleryCategories from "../../components/sections/gallery/gallery-categories";
// import GalleryGrid from "../../components/sections/gallery/gallery-grid";
// import GalleryTimeline from "../../components/sections/gallery/gallery-timeline";

export default function GalleryPage() {
  return (
    <main>
      <h1> Gallery page</h1>
     <GalleryCategories />
        {/* <ExpandableGallery />
        <GalleryCategories />
        <GalleryTimeline />  
        <GalleryGrid /> */}
        {/* <GalleryFeaturedSlider />     */}
    </main>
  );
}
