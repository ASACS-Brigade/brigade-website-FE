import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="
    bg-primary
    px-5
    py-10
    lg:px-12
    lg:py-32
    flex
    flex-col
    lg:flex-row
    items-center
    justify-center
    text-white
    md:gap-8
    gap-3
    "
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
      >
        {/* Left Content */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          text-center
          md:text-left
          gap-6
          "
        >
          {/* Text */}

          <div>
            <h3
              className="
            
              text-xl
              md:text-2xl
              lg:text-3xl
              font-bold
              "
            >
              Get Involved with The Brigade Today
            </h3>

            <p
              className="
              mt-2
              text-xs
              md:text-base
              
              max-w-xl
              "
            >
              Join a brotherhood and sisterhood committed to faith, leadership,
              discipline and service.
            </p>
          </div>
        </div>

        {/* CTA */}

        <button
          className="
          bg-secondary
          px-6
          md:px-8
          py-3
          rounded-md
          font-semibold
          text-white
          whitespace-nowrap
          hover:opacity-90
          transition
          
          md:w-auto
          md:text-base
          text-xs
          "
        >
          Register Interest
        </button>
      </div>
    </section>
  );
}
