import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarToday24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h4v-1.5h-4c-.97 0-1.75-.78-1.75-1.75V8.5h15v9.25c0 .97-.78 1.75-1.75 1.75h-4V21h4c1.8 0 3.25-1.46 3.25-3.25V6.25zM6.25 4.5h11.5c.97 0 1.75.78 1.75 1.75V7h-15v-.75c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M13.25 11.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M13.75 18.31a.75.75 0 001-1.12l-2.25-2a.75.75 0 00-1 0l-2.25 2a.75.75 0 001 1.12l1-.89v3.83a.75.75 0 101.5 0v-3.83l1 .9z" fill={primaryFill} /></svg>;
};

export default CalendarToday24Regular;