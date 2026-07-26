import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import Container from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                src="/images/gb-logo.png"
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
                About
              </h3>

              <ul className="space-y-3 text-sm">

                <li><Link href="/about" className="navHover">About Us</Link></li>
                <li><Link href="/about/5th-surulere-company" className="navHover">5th Surulere Company</Link></li>
                <li><Link href="/about/9th-surulere-company" className="navHover">9th Surulere Company</Link></li>
                <li><Link href="/about#leadership" className="navHover">Leadership</Link></li>
                <li><Link href="/about#values" className="navHover">Our Values</Link></li>

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

                <li><Link href="/events" className="navHover">Weekly Meetings</Link></li>
                <li><Link href="/gallery/outreach" className="navHover">Outreach</Link></li>
                <li><Link href="/gallery/camp" className="navHover">Camps</Link></li>
                <li><Link href="/about#leadership" className="navHover">Members</Link></li>
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
                  All Saints Anglican Church,
                  {/* <br />
                  4, Adisa Bashua Street, */}
                  <br />
                  Surulere, Lagos, Nigeria
                </p>

                {/* <p>
                  +234 801 234 5678
                </p> */}

                <p>
                  <a href="mailto:bbgb.asacs@gmail.com" className="navHover">
                    bbgb.asacs@gmail.com
                  </a>
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
            © {currentYear} Boys & Girls Brigade,
            Surulere Company. All Rights Reserved.
          </div>

        </div> 

      </Container>

    </footer>
  );
}

