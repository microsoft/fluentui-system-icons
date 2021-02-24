import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarEmpty28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zm1.75 6.5h-19v12.25c0 .97.78 1.75 1.75 1.75h15.5c.97 0 1.75-.78 1.75-1.75V9.5zm-1.75-5H6.25c-.97 0-1.75.78-1.75 1.75V8h19V6.25c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
};

export default CalendarEmpty28Regular;