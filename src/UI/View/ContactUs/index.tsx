import React from 'react'
import style from "./index.module.scss"
import { Gutter } from '@/UI/Components/Gutter'
import { Icons } from '@/UI/Components/Icons';

export const Contact_Us = () => {
  return (
    <Gutter className={style.container}>
      <div className={style.main}>
        <div className={style.title}>
          <div className={style.head}>
            <h4>Call us for further information</h4>
            <h1>Rentaly customer care is here to help you anytime.</h1>
          </div>
        </div>
        <div className={style.content}>
            <Icons.Call />
            <h2>Call US Now</h2>
            <h1>+1 123 456 7890</h1>
            <button>Contact Us</button>
        </div>
      </div>
    </Gutter>
  );
}
