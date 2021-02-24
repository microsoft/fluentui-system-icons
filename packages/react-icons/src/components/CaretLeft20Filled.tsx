import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 14.2a1 1 0 01-1.63.78l-4.72-3.81a1.5 1.5 0 010-2.34l4.72-3.81A1 1 0 0113 5.8v8.4z" fill={primaryFill} /></svg>;
};

export default CaretLeft20Filled;