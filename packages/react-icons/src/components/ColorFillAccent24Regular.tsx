import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorFillAccent24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.17 15.5a3.46 3.46 0 006.64.05c.4.13.69.5.69.95v3a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3a1 1 0 011-1h3.83a3 3 0 002.56 0h2.28z" fill={primaryFill} /></svg>;
};

export default ColorFillAccent24Regular;