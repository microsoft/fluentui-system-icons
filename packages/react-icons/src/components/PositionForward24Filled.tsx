import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionForward24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.25 16.5c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25h-8A3.25 3.25 0 002 5.25v8c0 1.8 1.46 3.25 3.25 3.25h8z" fill={primaryFill} /><path d="M7.5 17.5H9v1.25c0 .97.78 1.75 1.75 1.75h8c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75H17.5V7.5h1.25c1.8 0 3.25 1.46 3.25 3.25v8c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 01-3.25-3.25V17.5z" fill={primaryFill} /></svg>;
};

export default PositionForward24Filled;