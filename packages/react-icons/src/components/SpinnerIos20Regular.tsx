import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpinnerIos20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a7 7 0 00-7 7 .5.5 0 01-1 0 8 8 0 118 8 .5.5 0 010-1 7 7 0 100-14z" fill={primaryFill} /></svg>;
};

export default SpinnerIos20Regular;