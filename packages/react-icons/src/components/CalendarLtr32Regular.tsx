import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarLtr32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 9a5 5 0 015-5h14a5 5 0 015 5v14a5 5 0 01-5 5H9a5 5 0 01-5-5V9zm5-3a3 3 0 00-3 3v1h20V9a3 3 0 00-3-3H9zM6 23a3 3 0 003 3h14a3 3 0 003-3V12H6v11z" fill={primaryFill} /></svg>;
};

export default CalendarLtr32Regular;