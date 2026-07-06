
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="pt-3">

      {/* <div
        className="
        bg-primary
        px-5
        py-10
        lg:px-12
        lg:py-16
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        gap-8
        "
      >

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
        > */}

         <div
        className="
      bg-primary
          px-5
          py-10
          lg:px-12
          lg:py-24
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

          {/* Logos */}

          <div className="flex items-center gap-3">

            <Image
              src="/images/bb-Logo.png"
              alt="Boys Brigade"
              width={70}
              height={70}
              className="w-14 h-auto md:w-[70px]"
            />

            <Image
              src="/images/gb-logo.png"
              alt="Girls Brigade"
              width={100}
              height={100}
              className="w-20 h-auto md:w-[100px]"
            />

          </div>

          {/* Text */}

          <div>

            <h3
              className="
              text-white
              text-xl
              md:text-2xl
              lg:text-3xl
              font-bold
              "
            >
              Become Part of Something Bigger
            </h3>

            <p
              className="
              mt-2
              text-sm
              md:text-base
              text-slate-300
              max-w-xl
              "
            >
              Join a brotherhood and sisterhood
              committed to faith, leadership,
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
          w-full
          md:w-auto
          " 
        >
          Register Interest
        </button>

      </div>

    </section>
  );
}