import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tab16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.8 4.24c0-1.24 1-2.25 2.25-2.25h7.5c1.25 0 2.26 1 2.26 2.25v7.5C13.8 13 12.8 14 11.56 14h-7.5C2.8 14 1.8 12.99 1.8 11.75V4.24zm2.25-.75a.75.75 0 00-.75.75v7.5c0 .42.34.76.75.76h7.5c.42 0 .76-.34.76-.75V4.24a.75.75 0 00-.75-.75h-7.5z" fill={primaryFill} /></svg>;
};

export default Tab16Filled;