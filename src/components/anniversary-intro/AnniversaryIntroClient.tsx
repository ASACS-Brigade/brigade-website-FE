"use client";

import dynamic from "next/dynamic";

const AnniversaryIntro = dynamic(() => import("./AnniversaryIntro"), {
  ssr: false,
});

export default function AnniversaryIntroClient() {
  return <AnniversaryIntro />;
}
