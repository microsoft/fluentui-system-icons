import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CircleHalfFill24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.03 11.25a10 10 0 0119.94 0H22V12a10 10 0 01-20 0v-.75h.03zM12 3.5a8.5 8.5 0 00-8.47 7.75h16.94A8.5 8.5 0 0012 3.5z" fill={primaryFill} /></svg>;
};

export default CircleHalfFill24Regular;