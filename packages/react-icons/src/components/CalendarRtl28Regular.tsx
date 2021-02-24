import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarRtl28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v15.5C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25V6.25C25 4.45 23.54 3 21.75 3H6.25zM4.5 9.5h19v12.25c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V9.5zm14.75 8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-5.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm5.25-5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-5.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-5.26 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-2.49-8h15.5c.97 0 1.75.78 1.75 1.75V8h-19V6.25c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /></svg>;
};

export default CalendarRtl28Regular;