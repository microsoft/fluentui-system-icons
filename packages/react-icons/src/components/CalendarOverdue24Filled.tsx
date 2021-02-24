import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarOverdue24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 12.02V8.5H3v9.25C3 19.55 4.46 21 6.25 21h5.77A6.5 6.5 0 0121 12.02z" fill={primaryFill} /><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25V7h18v-.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6-3a.5.5 0 011 0v4a.5.5 0 01-1 0v-4zm1.13 6a.62.62 0 11-1.25 0 .62.62 0 011.25 0z" fill={primaryFill} /></svg>;
};

export default CalendarOverdue24Filled;