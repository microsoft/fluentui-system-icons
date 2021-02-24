import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarWeekStart28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25zm2.5-5.25c.38 0 .7-.28.74-.65l.01-.1V8.9a.75.75 0 00-1.5 0v10.2c.06.37.37.65.75.65z" fill={primaryFill} /></svg>;
};

export default CalendarWeekStart28Filled;