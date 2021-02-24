import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarToday24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.25 11.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M21 8.5v9.25c0 1.8-1.46 3.25-3.25 3.25h-4V19.43a1.75 1.75 0 001.66-2.99l-2.25-2a1.75 1.75 0 00-2.32 0l-2.25 2a1.75 1.75 0 001.66 2.99V21h-4A3.25 3.25 0 013 17.75V8.5h18zM12 14a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill={primaryFill} /><path d="M17.75 3C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /><path d="M14.81 18.25a.75.75 0 01-1.06.06l-1-.89v3.83a.75.75 0 01-1.5 0v-3.83l-1 .9a.75.75 0 01-1-1.13l2.25-2a.75.75 0 011 0l2.25 2c.3.27.34.75.06 1.06z" fill={primaryFill} /></svg>;
};

export default CalendarToday24Filled;