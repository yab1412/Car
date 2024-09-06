"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { Icons } from "@/UI/Components/Icons";

const step = [
  {
    icon: Icons.Trophy,
    title: "First Class Services",
    description: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
  },
  {
    icon: Icons.Road1,
    title: "24/7 Road Assistance",
    description: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
  },
  {
    icon: Icons.Location,
    title: "Free Pick-Up & Drop-Off",
    description: "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
  }
]

export const Adventure = () => {
  const parallaxBackgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxBackground = parallaxBackgroundRef.current;

      if (parallaxBackground) {
        parallaxBackground.style.backgroundPosition = `50% ${
          scrollPosition * 1
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <section className={style.parallaxSection}>
          <div
            ref={parallaxBackgroundRef}
            className={style.parallaxBackground}
          />
          <div className={style.general}>
            <div className={style.content}>
              <div className={style.head}>
                <h2>Let&apos;s Your Adventure Begin</h2>
              </div>
                  {step.map((item, index) => (
                    <div key={index} className={style.step}>
                      <div className={style.icon}>
                        <item.icon size={40} />
                      </div>
                      <div className={style.description}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
