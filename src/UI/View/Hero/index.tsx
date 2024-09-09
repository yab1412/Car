"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { Icons } from "@/UI/Components/Icons";

const descriptions = [
  {
    number: "1",
    title: "Discover Our Luxury Range",
    description:
      "Our mission is to provide the best possible service for our clients and to help them find the perfect car to take to the road.",
  },
  {
    number: "2",
    title: "Experience Our Exclusive Ride-Sharing",
    description:
      "Our mission is to provide the best possible service for our clients and to help them find the perfect car to take to the road.",
  },
  {
    number: "3",
    title: "Book Now & Save Time",
    description:
      "Our mission is to provide the best possible service for our clients and to help them find the perfect car to take to the road.",
  },
  {
    number: "4",
    title: "Book Now & Save Time",
    description:
      "Our mission is to provide the best possible service for our clients and to help them find the perfect car to take to the road.",
  },
];

export const Hero = () => {
  const parallaxBackgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxBackground = parallaxBackgroundRef.current;

      if (parallaxBackground) {
        parallaxBackground.style.backgroundPosition = `50% ${
          scrollPosition * -0.5
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
          <Gutter className={style.content}>
            <div className={style.head}>
              <h2>Looking for a </h2>
              <h2 style={{ color: "#FFEA00" }}>vehicle?</h2>
              <h2> You&apos;re at the right place.</h2>
            </div>
            <div className={style.data}>
              <div className={style.info}>
                <h2>What is your vehicle type?</h2>
                <div className={style.list}>
                  {[
                    { id: "car", icon: Icons.Car, label: "Car" },
                    { id: "van", icon: Icons.Van, label: "Van" },
                    { id: "minibus", icon: Icons.Minibus, label: "Minibus" },
                    { id: "bus", icon: Icons.Offroader, label: "Bus" },
                  ].map((item) => (
                    <div key={item.id}>
                      <div className={style.carTypes}>
                        <item.icon color="rgba(0, 68, 255, 0.651)" size={50} />
                        <h3>{item.label}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.form}>
                <form action="#" className={style.form}>
                  <div className={style.place}>
                    <div className={style.field}>
                      <label htmlFor="pickupLocation">Pickup Location</label>
                      <div className={style.inputs}>
                        <input type="text" placeholder="Your name" />
                      </div>{" "}
                    </div>
                    <div className={style.field}>
                      <label htmlFor="destination">Destination</label>
                      <div className={style.inputs}>
                        <input type="email" placeholder="Your email" />
                      </div>{" "}
                    </div>
                  </div>

                  <div className={style.time}>
                    <div className={style.field}>
                      <label htmlFor="date">Pickup Date & Time</label>
                      <div className={style.inputs}>
                        <input type="date" placeholder="YYYY-MM-DD" />
                        <input type="time" placeholder="HH:MM" />
                      </div>
                    </div>
                    <div className={style.field}>
                      <label htmlFor="time">Return Date & Time</label>
                      <div className={style.inputs}>
                        <input type="date" placeholder="YYYY-MM-DD" />
                        <input type="time" placeholder="HH:MM" />
                      </div>
                    </div>
                  </div>
                  <div className={style.submit}>
                    <button>Find A Vehicle</button>
                  </div>
                </form>
              </div>
            </div>
          </Gutter>
        </section>

        <Gutter>
          <div className={style.descriptions}>
              {descriptions.map((item, index) => (
                <div key={index} className={style.description}>
                  <div className={style.title}>
                    <h3>{item.number}</h3>
                    <div className={style.line}></div>
                  </div>
                  <div className={style.ContentDiscription}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </Gutter>
      </div>
    </div>
  );
};
