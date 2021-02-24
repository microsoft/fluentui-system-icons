import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookmarkOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.79 2.79v15.18c0 .6.68.96 1.18.6L12 17.67l5.81 4.18c.5.36 1.2 0 1.2-.6v-1.19l1.7 1.72a.75.75 0 001.07-1.06L3.28 2.22z" fill={primaryFill} /><path d="M19 6.25v9.57L6.62 3.44A3.24 3.24 0 018.25 3h7.5C17.55 3 19 4.45 19 6.25z" fill={primaryFill} /></svg>;
};

export default BookmarkOff24Filled;