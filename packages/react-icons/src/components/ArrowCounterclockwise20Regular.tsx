import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCounterclockwise20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.93 9.05A7 7 0 004.38 5.83L4.25 6H7.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v2.2a8 8 0 11-1.99 4.77.5.5 0 111 .08 7 7 0 1013.92-.5z" fill={primaryFill} /></svg>;
};

export default ArrowCounterclockwise20Regular;