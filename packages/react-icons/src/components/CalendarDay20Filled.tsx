import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarDay20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm-1.78 6H7.28c-.44 0-.6.05-.77.13a.9.9 0 00-.38.38c-.07.14-.12.29-.13.62v2.59c0 .44.05.6.13.77.1.16.22.29.38.38.14.07.29.12.62.13H12.72c.44 0 .6-.05.77-.13a.9.9 0 00.38-.38c.07-.14.12-.29.13-.62v-2.59c0-.44-.05-.6-.13-.77a.9.9 0 00-.38-.38 1.24 1.24 0 00-.62-.13h-.15zm.2 1h.07V13H7.01v-2.98h5.9zm.58-4H6.41a.5.5 0 000 1h7.18a.5.5 0 000-1h-.09z" fill={primaryFill} /></svg>;
};

export default CalendarDay20Filled;