// import unswUni from "@/components/blogs/unswUni";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";
// import unswUni from "@/components/blogs/unswUni";
import UniShefieldHallam from "@/components/blogs/UniShefieldhallam";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "RMIT Univerrsity || Australia",
  description:
    "RMIT is a global university of technology, design and enterprise",
};

export default function SheffieldHalam() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />
        
          <UniShefieldHallam/>

        <FooterOne />
      </div>
    </div>
  );
}
