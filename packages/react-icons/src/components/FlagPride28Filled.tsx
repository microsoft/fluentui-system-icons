import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagPride28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path fill="#745125" d="M5 4.25h18V6H5z" /><path fill="#E62C46" d="M5 6h18v2H5z" /><path fill="#F36D38" d="M5 8h18v2H5z" /><path fill="#FFD23E" d="M5 10h18v1H5z" /><path fill="#61BC51" d="M5 11h18v2H5z" /><path fill="#1793E8" d="M5 13h18v2H5z" /><path fill="#B73FBB" d="M5 15h18v2H5z" /><path d="M4.75 3a.75.75 0 00-.75.75v20.5a.75.75 0 001.5 0V18h17.75c.41 0 .75-.34.75-.75V3.75a.75.75 0 00-.75-.75H4.75zm.75 1.5h17v12h-17v-12z" fill={primaryFill} /></svg>;
};

export default FlagPride28Filled;