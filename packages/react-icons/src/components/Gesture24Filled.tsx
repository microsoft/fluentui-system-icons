import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Gesture24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 18a1 1 0 110 2 1 1 0 010-2zM7 4h10a1 1 0 01.12 2H12.35l8.01 3.1a1 1 0 01.2 1.77l-.11.06-14 6.97a1 1 0 01-1-1.74l.1-.06 11.98-5.95-10.9-4.22c-.99-.38-.76-1.82.25-1.92L7 4h10H7zm13 0a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default Gesture24Filled;