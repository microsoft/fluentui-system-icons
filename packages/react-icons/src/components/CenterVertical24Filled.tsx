import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CenterVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 3.75c0 .41-.34.75-.75.75H3.75a.75.75 0 010-1.5h16.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M21 20.25c0 .41-.34.75-.75.75H3.75a.75.75 0 010-1.5h16.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M5 14.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-11C5.67 8 5 8.67 5 9.5v5z" fill={primaryFill} /></svg>;
};

export default CenterVertical24Filled;