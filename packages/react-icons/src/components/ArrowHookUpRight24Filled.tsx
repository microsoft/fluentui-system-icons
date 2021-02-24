import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 18H16a1 1 0 110 2h-5.5a6.5 6.5 0 110-13h5.14l-1.93-1.93a1 1 0 011.41-1.42l3.53 3.53c.1.1.16.2.21.31a1 1 0 01-.18 1.24l-.03.03-3.53 3.53a1 1 0 01-1.41-1.41L15.59 9H10.5a4.5 4.5 0 100 9z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpRight24Filled;