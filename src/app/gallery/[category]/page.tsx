// import { notFound } from "next/navigation";

// import { galleryCategories } from "../../../../data/gallery";

// import CategoryHero from "../../../components/sections/gallery/category-hero";

// import CategoryGallery from "../../../components/sections/gallery/category-gallery";

// import CategoryBreadcrumb from "../../../components/sections/gallery/category-breadcrumb";

// import Container from "../../../components/layout/container";

// export default async function CategoryPage({
//   params,
// }: {
//   params: Promise<{
//     category: string;
//   }>;
// }) {
//   const { category } = await params;

//   const data =
//     galleryCategories[
//       category as keyof typeof galleryCategories
//     ];

//   if (!data) {
//     notFound();
//   }

//   return (
//     <>
//       <CategoryHero
//         title={data.title}
//         description={data.description}
//         image={data.heroImage}
//       />

//       <section className="pt-10">
//         <Container>
//           <CategoryBreadcrumb />
//         </Container>
//       </section>

//       <CategoryGallery
//         images={data.images}
//       />
//     </>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>category page</div>
  )
}

export default page