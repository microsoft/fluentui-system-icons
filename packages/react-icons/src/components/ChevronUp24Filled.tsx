import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronUp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 15.7a1 1 0 001.4 0L12 9.42l6.3 6.3a1 1 0 001.4-1.42l-7-7a1 1 0 00-1.4 0l-7 7a1 1 0 000 1.42z" fill={primaryFill} /></svg>;
};

export default ChevronUp24Filled;