import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarToday20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 10a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M17 14.5V7H3v7.5A2.5 2.5 0 005.5 17h3v-1.75a1.5 1.5 0 01-.98-2.64h.01l1.5-1.25a1.5 1.5 0 011.94 0l1.5 1.25a1.5 1.5 0 01-.97 2.64V17h3a2.5 2.5 0 002.5-2.5zM12 9a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V6h14v-.5z" fill={primaryFill} /><path d="M11.18 14.13a.5.5 0 00.64-.76l-1.5-1.25a.5.5 0 00-.64 0l-1.5 1.25a.5.5 0 10.64.76l.68-.56v3.93a.5.5 0 101 0v-3.93l.68.56z" fill={primaryFill} /></svg>;
};

export default CalendarToday20Filled;