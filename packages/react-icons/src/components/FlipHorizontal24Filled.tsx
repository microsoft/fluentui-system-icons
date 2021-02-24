import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlipHorizontal24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 17.5a.75.75 0 01-.66-1.1L10.1 4.9a.75.75 0 011.41.35v11.5c0 .41-.34.75-.75.75H4.5z" fill={primaryFill} /><path d="M19.5 17.5a.75.75 0 00.66-1.1L13.9 4.9a.75.75 0 00-1.41.35v11.5c0 .41.34.75.75.75h6.25zm-5-2v-5.33l2.9 5.33h-2.9z" fill={primaryFill} /></svg>;
};

export default FlipHorizontal24Filled;