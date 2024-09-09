"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Icons } from "@/UI/Components/Icons";

const inspirationData = [
  {
    title: "Toyota",
    icon: Icons.Toyota,
  },
  {
    title: "Hyundai",
    icon: Icons.Hyundai,
  },
  {
    title: "Nissan",
    icon: Icons.Nissan,
  },
  {
    title: "Suzuki",
    icon: Icons.Suzuki,
  },
  {
    title: "BMW",
    icon: Icons.BMW,
  },
  {
    title: "Mistubishi",
    icon: Icons.Mistubishi,
  },
  {
    title: "Volvo",
    icon: Icons.Volvo,
  },
  {
    title: "RollsRoyce",
    icon: Icons.RollsRoyce,
  },
  {
    title: "Porsche",
    icon: Icons.Porsche,
  },
  {
    title: "Mazda",
    icon: Icons.Mazda,
  },
  {
    title: "Kia",
    icon: Icons.KIA,
  },
  {
    title: "Jaguar",
    icon: Icons.Jaguar,
  },
  {
    title: "Mercedes",
    icon: Icons.Mercedes,
  },
  {
    title: "Tesla",
    icon: Icons.Tesla,
  },
  {
    title: "Lexus",
    icon: Icons.Lexus,
  },
];

export const Inspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [inspirations, setInspirations] = useState([
    ...inspirationData,
    ...inspirationData,
  ]); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirations.length); 
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, [inspirations]);

  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        {inspirations.map((inspiration, index) => (
          <div
            key={index}
            className={style.inspiration}
            style={{
              transform: `translateX(${index * 150}px)`,
              flexShrink: 0,
            }}
          >
            <h2>{inspiration.title}</h2>
            <inspiration.icon size={50} color="#FFEA00" />
          </div>
        ))}
      </div>
    </Gutter>
  );
};
