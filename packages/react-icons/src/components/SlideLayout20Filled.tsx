import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideLayout20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 7h9c.28 0 .5.22.5.5V9H5V7.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M7 10v3H5.5a.5.5 0 01-.5-.5V10h2z" fill={primaryFill} /><path d="M14.5 13H8v-3h7v2.5a.5.5 0 01-.5.5z" fill={primaryFill} /><path d="M4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zm10 10h-9A1.5 1.5 0 014 12.5v-5C4 6.67 4.67 6 5.5 6h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /></svg>;
};

export default SlideLayout20Filled;