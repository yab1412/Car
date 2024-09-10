import React from "react";
import { Gutter } from "../Gutter";
import Image from "next/image";
import style from "./index.module.scss";
import { Icons } from "../Icons";
import Link from "next/link";


const services = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];


export const Footer = () => {
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.about}>
            <h2>About Us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              similique nam dicta corporis nihil earum beatae reiciendis
              repellendus libero consequatur dolores illo fuga accusamus, culpa
              repudiandae laboriosam. Ipsum, alias saepe.
            </p>
          </div>
          <div className={style.contact}>
            <h2>Contact Us</h2>
            <p>
              <Icons.Location size={20} /> 123 Main Street, City, State, ZIP
              Code
            </p>
          </div>
          <div className={style.services}>
            <h2>Useful Links</h2>
            <div className={style.link}>
              {services.map((link) => (
                <div className={style.links} key={link.title}>
                  <Link className={style.for} href={link.path}>
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={style.icons}>
            <h2>Social Networks</h2>
            <div className={style.socials}>
              <div className={style.icon}>
                <Icons.FaceBook size={20} />
              </div>
              <div className={style.icon}>
                <Icons.Youtube size={20} />
              </div>
              <div className={style.icon}>
                <Icons.Instagram size={20} />
              </div>
              <div className={style.icon}>
                <Icons.LinkedIn size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.line}></div>

        <div className={style.foot}>
          <div className={style.copyright}>
            <p>&copy; Yenu Trading 2024. | All rights reserved.</p>
          </div>
          <div className={style.terms}>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Help Center</p>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
