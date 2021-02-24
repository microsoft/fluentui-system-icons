import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDown24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.1 8a1.25 1.25 0 00-.94 2.07l5.52 6.31c.7.8 1.94.8 2.64 0l5.52-6.3c.7-.82.13-2.08-.94-2.08H6.1z" fill={primaryFill} /></svg>;
};

export default CaretDown24Filled;