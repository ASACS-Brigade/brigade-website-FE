import CompleteGallery from "../../../components/sections/gallery/complete-gallery";
import CtaBanner from "../../../components/shared/ctaBanner";

export default function CompleteGalleryPage() {
  return (
    <main>
      <CompleteGallery />
      <CtaBanner
        heading="Get Involved Today"
        subheading="Join our community and make an impact."
        buttonLabel="Register Interest"
        buttonHref="/register"
      />
    </main>
  );
}
