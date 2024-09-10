"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Counter from "./Counter";

export const Our_Offer = () => {
  const parallaxBackgroundRef = useRef<HTMLDivElement | null>(null);
  const view = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entery = entries[0];
      if (entery.isIntersecting) {
        setIsVisible(entery.isIntersecting);
      }
    });

    const currentView = view.current;
    if (currentView) {
      observer.observe(currentView);
    }

    return () => {
      if (currentView) {
        observer.unobserve(currentView);
      }
    };
  });

  return (
    <div id="offers" className={style.container}>
      <div className={style.main}>
        <section className={style.parallaxSection}>
          <div
            ref={parallaxBackgroundRef}
            className={style.parallaxBackground}
          />
          <Gutter className={style.general}>
            <div className={style.content}>
              <div className={style.head}>
                <h2>We offer customers a wide range of </h2>
                <h2
                  style={{
                    color: "#FFEA00",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  commercial cars
                </h2>
                <h2> and</h2>
                <h2
                  style={{
                    color: "#FFEA00",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  luxury cars
                </h2>
                <h2>for any occasion.</h2>
              </div>
              <div className={style.description}>
                <h3>
                  At our car rental agency, we believe that everyone deserves to
                  experience the pleasure of driving a reliable and comfortable
                  vehicle, regardless of their budget. We have curated a diverse
                  fleet of well-maintained cars, ranging from sleek sedans to
                  spacious SUVs, all at competitive prices. With our streamlined
                  rental process, you can quickly and conveniently reserve your
                  desired vehicle. Whether you need transportation for a
                  business trip, family vacation, or simply want to enjoy a
                  weekend getaway, we have flexible rental options to
                  accommodate your schedule.
                </h3>
              </div>
            </div>

            <div className={style.counters}>
              <div
                ref={view}
                className={[
                  style.item,
                  isVisible ? style.contentView1 : null,
                ].join("")}
              >
                <div
                  ref={view}
                  className={[
                    style.itemContent,
                    isVisible ? style.viwers : null,
                  ].join("")}
                >
                  <Counter title="Completed Orders" maxCount={15425} />
                </div>
              </div>
              <div
                ref={view}
                className={[
                  style.item,
                  isVisible ? style.contentView2 : null,
                ].join("")}
              >
                <div
                  ref={view}
                  className={[
                    style.itemContent,
                    isVisible ? style.viwers : null,
                  ].join("")}
                >
                  <Counter title="Happy Customers" maxCount={8745} />
                </div>
              </div>
              <div
                ref={view}
                className={[
                  style.item,
                  isVisible ? style.contentView3 : null,
                ].join("")}
              >
                <div
                  ref={view}
                  className={[
                    style.itemContent,
                    isVisible ? style.viwers : null,
                  ].join("")}
                >
                  <Counter title="Vehicles Fleet" maxCount={235} />
                </div>
              </div>
              <div
                ref={view}
                className={[
                  style.item,
                  isVisible ? style.contentView4 : null,
                ].join("")}
              >
                <div
                  ref={view}
                  className={[
                    style.itemContent,
                    isVisible ? style.viwers : null,
                  ].join("")}
                >
                  <Counter title="Years" maxCount={15} />
                </div>
              </div>
            </div>
          </Gutter>
        </section>
      </div>
    </div>
  );
};
