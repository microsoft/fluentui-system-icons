import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SwipeRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12a1 1 0 001 1h11.59l-1.3 1.3a1 1 0 00-.08 1.31l.08.1a1 1 0 001.32.08l.1-.08 3-3a1 1 0 00.08-1.32l-.08-.1-3-3a1 1 0 00-1.5 1.32l.08.1L18.6 11H7a1 1 0 00-1 1zm-4 0a5 5 0 009.58 2h-1.7a3.5 3.5 0 110-4h1.7A5 5 0 002 12z" fill={primaryFill} /></svg>;
};

export default SwipeRight24Filled;