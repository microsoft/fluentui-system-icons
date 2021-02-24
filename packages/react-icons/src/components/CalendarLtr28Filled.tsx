import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarLtr28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 9.5v12.25c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V9.5h22zm-16.26 8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm5.26 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-5.26-5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm5.26 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm5.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm2.5-9.5C23.55 3 25 4.46 25 6.25V8H3V6.25C3 4.45 4.46 3 6.25 3h15.5z" fill={primaryFill} /></svg>;
};

export default CalendarLtr28Filled;