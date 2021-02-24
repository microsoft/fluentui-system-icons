import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 14.2a1 1 0 001.63.78l4.72-3.81a1.5 1.5 0 000-2.34L8.63 5.02A1 1 0 007 5.8v8.4z" fill={primaryFill} /></svg>;
};

export default CaretRight20Filled;