import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CircleHalfFill24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.03 11.25a10 10 0 0119.94 0H22V12a10 10 0 01-20 0v-.75h.03zm2 0h15.94a8 8 0 00-15.94 0z" fill={primaryFill} /></svg>;
};

export default CircleHalfFill24Filled;