import Link from "next/link";
import Image from "next/image";

import {
  FaFacebook,
  FaFacebookF,
  
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      <Container>

        <div className="py-14">

          {/* Top Section */}

          <div>

            <div className="flex items-start gap-4">

              <Image
                src="/images/bb-Logo.png"
                alt="BGB Logo"
                width={40}
                height={40}
              />

              <div>

                <h2
                  className="
                  text-xl
                  font-bold
                  leading-tight
                  "
                >
                  THE 5TH & 9TH
                  <br />
                  SURULERE COMPANIES
                </h2>

                {/* <p
                  className="
                  text-xs
                  text-slate-300
                  mt-1
                  "
                >
                  SURULERE COMPANIES
                </p> */}

              </div>

              <Image
                src="/images/gb-Logo.png"
                alt="girls brigade Logo"
                width={35}
                height={35}
              />

            </div>

            {/* Socials */}

            <div className="flex gap-3 mt-6">

              <a
                href="https://www.linkedin.com/company/asacsbrigade/"
                className="
                h-8
                w-8
                rounded-full
                border
                border-slate-500
                flex
                items-center
                justify-center
                hover:bg-secondary
                hover:border-secondary
                transition
                "
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://www.instagram.com/bbgb.asacs/"
                className="
                h-8
                w-8
                rounded-full
                border
                border-slate-500
                flex
                items-center
                justify-center
                hover:bg-secondary
                hover:border-secondary
                transition
                "
              >
                <FaInstagram size={14} /> 
              </a>

              <a
                href="#"
                className="
                h-8
                w-8
                rounded-full
                border
                border-slate-500
                flex
                items-center
                justify-center
                hover:bg-secondary
                hover:border-secondary
                transition
                "
              >
                <FaYoutube size={14} />
              </a>

  <a
                href="#"
                className="
                h-8
                w-8
                rounded-full
                border
                border-slate-500
                flex
                items-center
                justify-center
                hover:bg-secondary
                hover:border-secondary
                transition
                "
              >
                <FaFacebookF size={14} />
              </a>

            </div>

          </div>

          {/* Divider */}

          <div className="h-px bg-slate-700 my-8" />

          {/* Footer Columns */}

          <div
            className="
            grid
            md:grid-cols-4
            gap-8
            "
          >

            {/* Ministry */}

            <div>

              <h3
                className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                mb-4
                "
              >
                Ministry
              </h3>

              <ul className="space-y-3 text-sm">

                <li>Our Story</li>
                <li>Leadership</li>
                <li>Our Values</li>
                <li>Programs</li>

              </ul>

            </div>

            {/* Quick Links */}

            <div>

              <h3
                className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                mb-4
                "
              >
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm">

                <li>
                  <Link href="/"  className="navHover">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="navHover">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/articles"  className="navHover">
                    Articles
                  </Link>
                </li>

                <li>
                  <Link href="/gallery" className="navHover">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link href="/events" className="navHover">
                    Events
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="navHover">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Programs */}

            <div>

              <h3
                className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                mb-4
                "
              >
                Programs
              </h3>

              <ul className="space-y-3 text-sm">

                <li>Weekly Meetings</li>
                <li>Outreach</li>
                <li>Camps</li>
              <Link href="/about#members">Members</Link>
                {/* <li>Training</li> */}

              </ul>

            </div>

            {/* Contact */}

            <div
              className="
              md:border-l
              md:border-slate-700
              md:pl-6
              "
            >

              <h3
                className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                mb-4
                "
              >
                Contact
              </h3>

              <div className="space-y-3 text-sm text-slate-300">

                <p>
                  All Saints' Anglican Church,
                  <br />
                  Surulere, Lagos
                </p>

                {/* <p>
                  +234 801 234 5678
                </p> */}

                <p>
                  bbgb.asacs@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div
            className="
            mt-10
            border-t
            border-slate-700
            pt-5
            text-center
            text-xs
            text-slate-400
            "
          >
            © 2026 Boys & Girls Brigade,
            Surulere Company. All Rights Reserved.
          </div>

        </div> 

      </Container>

    </footer>
  );
}

