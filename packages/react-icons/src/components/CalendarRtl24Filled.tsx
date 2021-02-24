import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarRtl24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 8.5v9.25C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V8.5H3zM16.75 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm4.75-4.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.75 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.75 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-1-7.5A3.25 3.25 0 003 6.25V7h18v-.75C21 4.45 19.54 3 17.75 3H6.25z" fill={primaryFill} /></svg>;
};

export default CalendarRtl24Filled;