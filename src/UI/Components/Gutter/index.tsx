import React, { FC, Ref } from "react";

import classes from "./index.module.scss";

type Props = {
  left?: boolean;
  right?: boolean;
  className?: string;
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
};

export const Gutter: FC<Props> = (props: any, ref: any) => {
  const { left = true, right = true, className, children } = props;

  return (
    <div
      // ref={ref}
      className={[
        classes.gutter,
        left && classes.gutterLeft,
        right && classes.gutterRight,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

Gutter.displayName = "Gutter";