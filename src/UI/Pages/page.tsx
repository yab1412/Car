import React from "react";
import { Hero } from "../View/Hero";
import { Inspiration } from "../View/Inispiration";
import { About } from "../View/About us";
import { Our_Offer } from "../View/Our Offer";
import { Our_Vehicle } from "../View/Our Vehicle";
import { Adventure } from "../View/Adventure";
import { News } from "../View/News";
import { QandA } from "../View/Q&A";
import { Contact_Us } from "../View/ContactUs";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Inspiration />
      <About />
      <Our_Offer />
      <Our_Vehicle />
      <Adventure />
      <News />
      <QandA />
      <Contact_Us />
    </div>
  );
};
