import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataWaterfall24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75c0-.41.34-.75.75-.75h6.5c1.24 0 2.25 1 2.25 2.25V11h6.25c1.24 0 2.25 1 2.25 2.25v6.25h1.25a.75.75 0 010 1.5h-6.5c-1.24 0-2.25-1-2.25-2.25V12.5H6.25c-1.24 0-2.25-1-2.25-2.25V4.5H2.75A.75.75 0 012 3.75zM18.5 19.5v-6.25a.75.75 0 00-.75-.75H14v6.25c0 .41.34.75.75.75h3.75zM10 5.25a.75.75 0 00-.75-.75H5.5v5.75c0 .41.34.75.75.75H10V5.25z" fill={primaryFill} /></svg>;
};

export default DataWaterfall24Regular;