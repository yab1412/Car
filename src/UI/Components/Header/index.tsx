"use client";

import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface Menu {
  title: string;
  path: string;
}

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HeaderProps {
  menu: Menu[];
  logo: Logo;
}

const Header = ({ menu, logo }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </Link>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.navigation}>
            <input type="checkbox" className={styles.toggle} />
            <div className={styles.humberger}> </div>
            <ul className={styles.menu}>
              {Object.keys(menu).map((key) => {
                const index = Number(key);
                return (
                  <li key={index} className={styles.menus}>
                    <Link href={menu[index].path}>{menu[index].title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;