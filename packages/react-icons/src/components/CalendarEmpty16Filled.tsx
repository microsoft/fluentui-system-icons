import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarEmpty16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6v5.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5V6h12zm-2.5-4A2.5 2.5 0 0114 4.5V5H2v-.5A2.5 2.5 0 014.5 2h7z" fill={primaryFill} /></svg>;
};

export default CalendarEmpty16Filled;