import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDown16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.96 5a1 1 0 00-.82 1.57l2.63 3.79c.6.85 1.86.85 2.46 0l2.63-3.79A1 1 0 0011.04 5H4.96z" fill={primaryFill} /></svg>;
};

export default CaretDown16Filled;