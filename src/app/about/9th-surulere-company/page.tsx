import type { Metadata } from "next";

import CompanyPage from "../../../components/sections/about/company-page";
import { getCompanyBySlug } from "../../../constants/companies";

export const metadata: Metadata = {
  title: "9th Surulere Company | All Saints’ Brigade Surulere",
  description:
    "Learn about the history, mission, activities and leadership of the 9th Surulere Company of The Girls’ Brigade Nigeria at All Saints’ Anglican Church, Surulere.",
  alternates: { canonical: "/about/9th-surulere-company" },
  openGraph: {
    title: "9th Surulere Company | All Saints’ Brigade Surulere",
    description:
      "Discover the Girls’ Brigade ministry at All Saints’ Anglican Church, Surulere.",
    url: "/about/9th-surulere-company",
  },
};

export default function NinthSurulereCompanyPage() {
  return <CompanyPage company={getCompanyBySlug("9th-surulere-company")} />;
}
