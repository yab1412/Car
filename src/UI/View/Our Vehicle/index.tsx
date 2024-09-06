"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import { Icons } from "@/UI/Components/Icons";

export const Our_Vehicle = () => {
  const cards = [
    {
      id: 1,
      name: "BMW",
      seats: "3",
      luggage: "2",
      doors: "4",
      carType: "BMW M3",
      src: "/assets/BMW.jpg",
      price: "123",
    },
    {
      id: 2,
      name: "Mercedes",
      seats: "3",
      luggage: "2",
      doors: "4",
      carType: "Mercedes Sedan",
      src: "/assets/sedan.jpg",
      price: "123",
    },
    {
      id: 3,
      name: "Jeep",
      seats: "3",
      luggage: "2",
      doors: "4",
      carType: "Jeep JK",
      src: "/assets/Jeep.jpg",
      price: "123",
    },
    {
      id: 4,
      name: "Range Rover",
      seats: "3",
      luggage: "2",
      doors: "4",
      carType: "Range Rover SDV",
      src: "/assets/suv.jpg",
      price: "123",
    },
    {
      id: 5,
      name: "Land Rover",
      seats: "3",
      luggage: "2",
      doors: "4",
      carType: "Defender",
      src: "/assets/Defender.jpg",
      price: "123",
    },
    {
      id: 6,
      name: "Lexus",
      seats: "3",
      luggage: "2",
      doors: "4",
      carType: "Lx570",
      src: "/assets/Lexus.jpg",
      price: "123",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    if (cardContainerRef.current) {
      const cardWidth = 420;
      cardContainerRef.current.style.transform = `translateX(${
        -currentIndex * cardWidth
      }px)`;
    }
  }, [currentIndex]);



  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        <div className={style.title}>
          <div className={style.head}>
            <h4>Enjoy Your Ride</h4>
            <h1>Our Vehicle Fleet</h1>
            <p>
              Driving your dreams to reality with an exquisite fleet of
              versatile vehicles for unforgettable journeys.
            </p>
          </div>
        </div>
        <div
          className={style.cardContainer}
          ref={cardContainerRef}
        >
          {cards.map((card, index) => (
            <div key={card.id} className={style.card}>
              <div className={style.cardImage}>
                <Image width={1000} height={250} src={card.src} alt={""} />
              </div>
              <div className={style.content}>
                <h2>{card.name}</h2>
                <div className={style.contentDiscription}>
                  <p>
                    <Icons.Man size={20} />
                    {card.seats}
                  </p>
                  <p>
                    <Icons.Luggage size={20} />
                    {card.luggage}
                  </p>
                  <p>
                    <Icons.Door size={20} />
                    {card.doors}
                  </p>
                  <p>
                    <Icons.CarType size={20} />
                    {card.carType}
                  </p>
                </div>
                <div className={style.line}></div>
                <div className={style.rent}>
                  <div className={style.price}>
                    <h3>Daily Rate</h3>
                    <p>${card.price}</p>
                  </div>
                  <div className={style.buttons}>
                    <button>Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {cards.map((card, index) => (
            <div key={`duplicate-${card.id}`} className={style.card}>
              <div className={style.cardImage}>
                <Image width={1000} height={250} src={card.src} alt={""} />
              </div>
              <div className={style.content}>
                <h2>{card.name}</h2>
                <div className={style.contentDiscription}>
                  <p>
                    <Icons.Man size={20} />
                    {card.seats}
                  </p>
                  <p>
                    <Icons.Luggage size={20} />
                    {card.luggage}
                  </p>
                  <p>
                    <Icons.Door size={20} />
                    {card.doors}
                  </p>
                  <p>
                    <Icons.CarType size={20} />
                    {card.carType}
                  </p>
                </div>
                <div className={style.line}></div>
                <div className={style.rent}>
                  <div className={style.price}>
                    <h3>Daily Rate</h3>
                    <p>${card.price}</p>
                  </div>
                  <div className={style.buttons}>
                    <button>Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.button}>
          <button className={style.Leftbutton} onClick={handlePrev}>
            <Icons.LeftArrow size={30} />
          </button>
          <button className={style.Rightbutton} onClick={handleNext}>
            <Icons.RightArrow size={30} />
          </button>
        </div>
      </div>
    </Gutter>
  );
};
