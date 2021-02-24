import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeUnion24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2A3.25 3.25 0 002 5.25v8c0 1.8 1.46 3.25 3.25 3.25H7.5v2.25c0 1.8 1.46 3.25 3.25 3.25h8c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25H16.5V5.25c0-1.8-1.46-3.25-3.25-3.25h-8z" fill={primaryFill} /></svg>;
};

export default ShapeUnion24Filled;