import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CircleLine24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.53 11.25h16.94a8.5 8.5 0 00-16.94 0zm16.94 1.5H3.53a8.5 8.5 0 0016.94 0zM2 12a10 10 0 1120 0 10 10 0 01-20 0z" fill={primaryFill} /></svg>;
};

export default CircleLine24Regular;