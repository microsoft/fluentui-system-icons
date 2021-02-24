import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NumberSymbol24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.98 3.16a1 1 0 00-1.97-.32L8.15 8H4a1 1 0 100 2h3.82l-.67 4H3a1 1 0 100 2h3.82L6 20.84a1 1 0 101.97.32L8.84 16h4.98l-.8 4.84a1 1 0 101.97.32l.86-5.17H20a1 1 0 000-2h-3.82l.67-4H21a1 1 0 000-2h-3.82l.8-4.83a1 1 0 10-1.97-.32l-.86 5.15h-4.97l.8-4.83zM9.85 10h4.97l-.67 4H9.18l.67-4z" fill={primaryFill} /></svg>;
};

export default NumberSymbol24Filled;