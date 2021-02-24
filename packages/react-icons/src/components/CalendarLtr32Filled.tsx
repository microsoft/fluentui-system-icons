import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarLtr32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4a5 5 0 00-5 5v1h24V9a5 5 0 00-5-5H9zM4 23V12h24v11a5 5 0 01-5 5H9a5 5 0 01-5-5zm6.5-5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 3.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5-6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
};

export default CalendarLtr32Filled;