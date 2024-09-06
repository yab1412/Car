import React from "react";
import style from "./index.module.scss";
import { Gutter } from "@/UI/Components/Gutter";
import Image from "next/image";
import { Icons } from "@/UI/Components/Icons";

const features = [
  {
    title: "First class services",
    icon: Icons.Trophy,
    description:
      "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
  },
  {
    title: "24/7 road assistance",
    icon: Icons.Road1,
    description:
      "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
  },
  {
    title: "Quality at Minimum Expense",
    icon: Icons.PriceTag,
    description:
      "Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.",
  },
  {
    title: "Free Pick-Up & Drop-Off",
    icon: Icons.Location,
    description: "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
  },
];

export const About = () => {
  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        <div className={style.title}>
          <div className={style.head}>
            <h4>Why Choose Us?</h4>
            <h1>Our Features</h1>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.description}>
            <div className={style.item}>
              {features.slice(0, 1).map((feature, key) => (
                <div key={key} className={style.featureItem}>
                  <span className={style.featureIcon}>
                    <feature.icon />
                  </span>
                  <div className={style.featureDescription}>
                    <h2>{feature.title}</h2>
                    <p> {feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.item}>
              {features.slice(1, 2).map((feature, key) => (
                <div key={key} className={style.featureItem}>
                  <div className={style.featureIcon}>
                    <feature.icon />
                  </div>
                  <div className={style.featureDescription}>
                    <h2>{feature.title}</h2>
                    <p> {feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image src={"/assets/Hero.png"} alt="" width={1000} height={400} />
          <div className={style.description}>
            <div className={style.item}>
              {features.slice(2, 3).map((feature, key) => (
                <div key={key} className={style.featureItem}>
                  <div className={style.featureIcon}>
                    <feature.icon />
                  </div>
                  <div className={style.featureDescription}>
                    <h2>{feature.title}</h2>
                    <p> {feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.item}>
              {features.slice(3, 4).map((feature, key) => (
                <div key={key} className={style.featureItem}>
                  <div className={style.featureIcon}>
                    <feature.icon />
                  </div>
                  <div className={style.featureDescription}>
                    <h2>{feature.title}</h2>
                    <p> {feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
