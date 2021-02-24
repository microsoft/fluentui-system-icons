import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarRtl28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 9.5v12.25C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25V9.5H3zm16.26 8a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-5.26 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5.26-5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-5.26 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-5.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6.25 3A3.25 3.25 0 003 6.25V8h22V6.25C25 4.45 23.54 3 21.75 3H6.25z" fill={primaryFill} /></svg>;
};

export default CalendarRtl28Filled;