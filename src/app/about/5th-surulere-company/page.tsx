import type { Metadata } from "next";

import CompanyPage from "../../../components/sections/about/company-page";
import { getCompanyBySlug } from "../../../constants/companies";

export const metadata: Metadata = {
  title: "5th Surulere Company | All Saints’ Brigade Surulere",
  description:
    "Learn about the history, mission, activities and leadership of the 5th Surulere Company of The Boys’ Brigade Nigeria at All Saints’ Anglican Church, Surulere.",
  alternates: { canonical: "/about/5th-surulere-company" },
  openGraph: {
    title: "5th Surulere Company | All Saints’ Brigade Surulere",
    description:
      "Discover the Boys’ Brigade ministry at All Saints’ Anglican Church, Surulere.",
    url: "/about/5th-surulere-company",
  },
};

export default function FifthSurulereCompanyPage() {
  return <CompanyPage company={getCompanyBySlug("5th-surulere-company")} />;
}
