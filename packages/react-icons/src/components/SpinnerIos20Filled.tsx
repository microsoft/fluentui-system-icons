import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpinnerIos20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3.5A6.5 6.5 0 003.5 10 .75.75 0 012 10a8 8 0 118 8 .75.75 0 010-1.5 6.5 6.5 0 100-13z" fill={primaryFill} /></svg>;
};

export default SpinnerIos20Filled;