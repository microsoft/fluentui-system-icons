import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRepeatAll24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.71 2.29l-.08-.08a1 1 0 00-1.33.08l-.08.09a1 1 0 00.08 1.32L14.6 5H8.76a7 7 0 00-5.57 10.9 1 1 0 001.63-1.17l-.14-.22A5 5 0 019 7h5.6l-1.3 1.3-.08.08a1 1 0 001.5 1.33l3-3 .08-.1a1 1 0 00-.08-1.32l-3-3zm6.08 5.77a1 1 0 00-1.62 1.18A5 5 0 0115 16.99H9.41l1.3-1.3.08-.09a1 1 0 000-1.23l-.08-.09-.1-.08a1 1 0 00-1.23 0l-.09.08-3 3-.08.1a1 1 0 000 1.23l.08.09 3 3 .1.09a1 1 0 001.4-1.41l-.08-.09-1.3-1.3h5.83A7 7 0 0020.8 8.05z" fill={primaryFill} /></svg>;
};

export default ArrowRepeatAll24Filled;