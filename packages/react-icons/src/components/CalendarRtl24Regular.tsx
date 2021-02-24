import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarRtl24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 8.5h15v9.25c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V8.5zm11.75 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-4.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4.25-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-4.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-4.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-1.5-6h11.5c.97 0 1.75.78 1.75 1.75V7h-15v-.75c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /></svg>;
};

export default CalendarRtl24Regular;