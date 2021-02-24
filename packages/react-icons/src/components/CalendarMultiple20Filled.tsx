import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarMultiple20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 13.5V6H2v7.5A2.5 2.5 0 004.5 16h9a2.5 2.5 0 002.5-2.5z" fill={primaryFill} /><path d="M16 4.5A2.5 2.5 0 0013.5 2h-9A2.5 2.5 0 002 4.5V5h14v-.5z" fill={primaryFill} /><path d="M5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 004.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 01-3.5 3.5H5z" fill={primaryFill} /></svg>;
};

export default CalendarMultiple20Filled;