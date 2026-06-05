import Container from "../layout/container";
import SectionHeader from "../layout/section-header";

export default function GalleryPreview() {
  return (
    <section className="section">

      <Container>

        <SectionHeader
          title="Gallery Highlights"
          subtitle="Moments of growth, fellowship and service."
        />

        <div
          className="
          grid
          md:grid-cols-4
          gap-4
          "
        >

          <div className="h-[300px] bg-slate-300 rounded-2xl" />
          <div className="h-[300px] bg-slate-200 rounded-2xl" />
          <div className="h-[300px] bg-slate-300 rounded-2xl" />
          <div className="h-[300px] bg-slate-200 rounded-2xl" />

        </div>

      </Container>

    </section>
  );
}


// import Container from "../layout/container";
// import SectionHeader from "../layout/section-header";

// export default function GalleryPreview() {
//   const images = [1, 2, 3, 4];

//   return (
//     <section className="section bg-slate-50">
//       <Container>

//         <SectionHeader
//           title="Moments From The Brigade"
//           subtitle="Snapshots of leadership, fellowship and service."
//         />

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//           {images.map((item) => (
//             <div
//               key={item}
//               className="
//                 h-64
//                 rounded-2xl
//                 bg-slate-300
//                 overflow-hidden
//               "
//             />
//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }