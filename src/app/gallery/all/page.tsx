import CompleteGallery from "../../../components/sections/gallery/complete-gallery";
import CtaBanner from "../../../components/shared/ctaBanner";
import { getGalleryData } from "../../../lib/content-api";

export default async function CompleteGalleryPage() {
  const { categories } = await getGalleryData();

  return (
    <main>
      <CompleteGallery categories={categories} />
      <CtaBanner
        heading="Get Involved Today"
        subheading="Join our community and make an impact."
        buttonLabel="Register Interest"
        buttonHref="/register"
      />
    </main>
  );
}
