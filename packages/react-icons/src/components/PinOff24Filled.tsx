import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PinOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l6.12 6.13-2.87 1.14-.1.05a.75.75 0 00-.15 1.18l3.2 3.2-4.95 4.96V21h1.06l4.96-4.96 3.23 3.24.08.07c.39.3.96.14 1.15-.32l1.15-2.87 5.62 5.62a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M20.97 11.34l-4.1 2.35-6.09-6.09 2.33-4.35a2.25 2.25 0 013.5-.6l.12.12 4.77 5.08a2.25 2.25 0 01-.39 3.4l-.14.1z" fill={primaryFill} /></svg>;
};

export default PinOff24Filled;