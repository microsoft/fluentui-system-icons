import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.27 3.2a.75.75 0 00-1.04 1.1l5.24 4.95H2.75a.75.75 0 000 1.5h12.73l-5.25 4.96a.75.75 0 101.04 1.09l6.41-6.07a1 1 0 000-1.46l-6.41-6.06z" fill={primaryFill} /></svg>;
};

export default ArrowRight20Filled;