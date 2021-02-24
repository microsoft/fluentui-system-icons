import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataWaterfall24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3a.75.75 0 000 1.5H4v5.75c0 1.24 1 2.25 2.25 2.25h6.25v6.25c0 1.24 1 2.25 2.25 2.25h6.5a.75.75 0 000-1.5H20v-6.25c0-1.24-1-2.25-2.25-2.25H11.5V5.25c0-1.24-1-2.25-2.25-2.25h-6.5z" fill={primaryFill} /></svg>;
};

export default DataWaterfall24Filled;