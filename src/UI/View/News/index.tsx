import React from "react";
import style from "./index.module.scss";
import { Gutter } from "@/UI/Components/Gutter";
import Image from "next/image";
import { Icons } from "@/UI/Components/Icons";

const news = [
  {
    src: "/assets/road.jpg",
    alt: "news-image",
    title: "News Image",
    date: "10",
    month: "Mar",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, justo vel semper fermentum, lectus ligula tincidunt lectus, at varius purus nunc ac neque.",
  },
  {
    src: "/assets/road.jpg",
    alt: "news-image",
    title: "News Image",
    date: "10",
    month: "Mar",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, justo vel semper fermentum, lectus ligula tincidunt lectus, at varius purus nunc ac neque.",
  },
  {
    src: "/assets/road.jpg",
    alt: "news-image",
    title: "News Image",
    date: "10",
    month: "Mar",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, justo vel semper fermentum, lectus ligula tincidunt lectus, at varius purus nunc ac neque.",
  },
];

const testimony = [
  {
    src: "/assets/road.jpg",
    name: "John Doe",
    mainTitle: "Excelent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, justo vel semper fermentum, lectus ligula tincidunt lectus, at varius purus nunc ac neque.",
  },
  {
    src: "/assets/road.jpg",
    name: "John Doe",
    mainTitle: "Excelent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, justo vel semper fermentum, lectus ligula tincidunt lectus, at varius purus nunc ac neque.",
  },
  {
    src: "/assets/road.jpg",
    name: "John Doe",
    mainTitle: "Excelent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, justo vel semper fermentum, lectus ligula tincidunt lectus, at varius purus nunc ac neque.",
  },
];

export const News = () => {
  return (
    <>
      <Gutter className={style.container}>
        <div id="news" className={style.main}>
          <div className={style.title}>
            <div className={style.head}>
              <h4>Latest From Us</h4>
              <h1>News & Promo</h1>
            </div>
          </div>

          <div className={style.content}>
            <div className={style.news}>
              {news.map((item, index) => (
                <div key={index} className={style.item}>
                  <div className={style.image}>
                    <Image
                      width={400}
                      height={400}
                      src={item.src}
                      alt={item.alt}
                    />
                    <div className={style.contentDiscription}>
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>

                      <button>Read More</button>
                    </div>
                    <div className={style.date}>
                      <h1>{item.date}</h1>
                      <h3>{item.month}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Gutter>
      <div className={style.testimony}>
        {testimony.map((item, index) => (
          <div key={index} className={style.testimonyItem}>
            <div className={style.testimonyImage}>
              <Image width={400} height={400} src={item.src} alt={"images"} />
              <div className={style.icon}>
                <Icons.Quote />
              </div>
              <div className={style.testimonyContent}>
                <h3>{item.mainTitle}</h3>
                <p>{item.content}</p>
                <h2><div className={style.line}></div>{item.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
