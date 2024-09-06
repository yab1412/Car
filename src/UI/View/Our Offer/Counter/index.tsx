"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

interface Props {
  maxCount: number;
  title: string;
}

const Counter: React.FC<Props> = ({ maxCount, title }) => {
  const view = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
        if (!isCounting) {
          setIsCounting(true);
        }
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
  }, [isCounting]);

  useEffect(() => {
    if (isCounting) {
      let intervalId: NodeJS.Timeout;

      const getIncrement = () => {
        if (count <= 100) return 1;
        if (count <= 1000) return 10;
        if (count >= 10000) return 100000;
        if (count <= 100000) return 100000;
        if (count <= 1000000) return 1000000;
        return 1000000;
      };

      intervalId = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + getIncrement(), maxCount));
      }, 30);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isCounting, count, maxCount]);

  const formatCount = () => {
    if (count < 1000) return `${count}`;
    if (count <= 100000) return `${count / 1000}K+`;
    if (count >= 100000) return `${count / 1000000}M+`;
    return `${count / 100000}M+`;
  };

  return (
    <div ref={view} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.counter} data-count={maxCount}>
            {formatCount()}
          </h1>
          <div className={styles.disc}>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
