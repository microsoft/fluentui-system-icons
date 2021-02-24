import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarEmpty28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 9.5v12.25c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V9.5h22zM21.75 3C23.55 3 25 4.46 25 6.25V8H3V6.25C3 4.45 4.46 3 6.25 3h15.5z" fill={primaryFill} /></svg>;
};

export default CalendarEmpty28Filled;