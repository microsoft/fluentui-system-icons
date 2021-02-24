import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a1 1 0 011-1h5c2.24 0 4.01.78 5.22 2.02A6.42 6.42 0 0120 10.5c0 1.61-.59 3.24-1.78 4.48A7.06 7.06 0 0113 17H8.41l2.05 2.04a1 1 0 01-1.42 1.42L5.3 16.7a1 1 0 010-1.42l3.75-3.75a1 1 0 011.42 1.42L8.4 15H13c1.76 0 2.99-.6 3.78-1.41A4.42 4.42 0 0018 10.5c0-1.14-.41-2.26-1.22-3.09A5.07 5.07 0 0013 6H8a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownLeft24Filled;