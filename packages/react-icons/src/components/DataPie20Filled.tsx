import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataPie20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 118 4.07z" fill={primaryFill} /><path d="M17.06 10c.5 0 .93-.37.94-.86V9a7 7 0 00-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 001 1h6.06z" fill={primaryFill} /></svg>;
};

export default DataPie20Filled;