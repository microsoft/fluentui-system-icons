import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarClock24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h5.77c-.3-.46-.53-.97-.7-1.5H6.24c-.97 0-1.75-.78-1.75-1.75V8.5h15v2.81c.53.18 1.04.42 1.5.71V6.25zM6.25 4.5h11.5c.97 0 1.75.78 1.75 1.75V7h-15v-.75c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5 0h2a.5.5 0 010 1H17a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v2.5z" fill={primaryFill} /></svg>;
};

export default CalendarClock24Regular;