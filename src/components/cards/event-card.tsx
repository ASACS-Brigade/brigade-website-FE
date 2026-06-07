import Image from "next/image";
import { MapPin, Clock3 } from "lucide-react";

interface EventCardProps {
  image: string;
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
}

export default function EventCard({
  image,
  day,
  month,
  title,
  location,
  time,
}: EventCardProps) {
  return (
    <div
      className="
      overflow-hidden
      rounded-xl
      border
      border-slate-200
      bg-white
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      <div className="relative h-70">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex gap-3">

        {/* Date Badge */}

        <div
          className="
          min-w-14
          h-15
          rounded-md
          border 
          border-secondary
          text-center
          overflow-hidden
          -mt-9
          z-10
          "
        >
          <div
            className="
            bg-slate-200
            text-xs
            font-semibold
            py-1.5
            "
          >
            {month}
          </div>

          <div
            className="
            text-lg
            font-bold
            pt-1
            "
          >
            {day}
          </div>
        </div>

        {/* Content */}

        <div className="flex-1">

          <h3
            className="
            font-semibold
            text-[15px]
            leading-tight
            text-[#0E2A47]
            "
          >
            {title}
          </h3>

          <div
            className="
            mt-3
            flex
            items-center
            gap-2
            text-xs
            text-slate-500
            "
          >
            <MapPin size={13} />

            <span>{location}</span>
          </div>

          <div
            className="
            mt-2
            flex
            items-center
            gap-2
            text-xs
            text-slate-500
            "
          >
            <Clock3 size={13} />

            <span>{time}</span>
          </div>

        </div>

      </div>
    </div>
  );
}



// export default function EventCard() {
//   return (
//     <div className="card overflow-hidden">

//       <div className="h-56 bg-slate-200" />

//       <div className="p-6">

//         <span className="text-sm text-[#D4A437] font-medium">
//           July 25, 2026
//         </span>

//         <h3 className="text-xl font-bold mt-2">
//           Annual Leadership Camp
//         </h3>

//         <p className="mt-3 text-gray-600">
//           Empowering future leaders through
//           mentorship and service.
//         </p>

//       </div>

//     </div>
//   );
// }