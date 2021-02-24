import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShiftsActivity24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.1 4.05a1 1 0 10-.21-1.99 10 10 0 1011.05 11.05 1 1 0 00-1.99-.22 8 8 0 11-8.84-8.84z" fill={primaryFill} /><path d="M14.77 2.4a1 1 0 00-.54 1.92c.28.08.57.17.84.29a1 1 0 00.76-1.86c-.35-.14-.7-.26-1.06-.36z" fill={primaryFill} /><path d="M17.35 4.7a1 1 0 011.41-.07l.61.6A1 1 0 0117.9 6.6a7.94 7.94 0 00-.49-.49 1 1 0 01-.06-1.4z" fill={primaryFill} /><path d="M11 6a1 1 0 011 1v5h3a1 1 0 110 2h-4a1 1 0 01-1-1V7a1 1 0 011-1z" fill={primaryFill} /><path d="M19.94 7.62a1 1 0 011.3.55 9.86 9.86 0 01.37 1.06 1 1 0 11-1.93.54 7.9 7.9 0 00-.29-.84 1 1 0 01.55-1.3z" fill={primaryFill} /></svg>;
};

export default ShiftsActivity24Filled;