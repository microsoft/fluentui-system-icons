import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarWorkWeek20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 9V7h6v2H7z" fill={primaryFill} /><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM6.5 6h7c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default CalendarWorkWeek20Filled;