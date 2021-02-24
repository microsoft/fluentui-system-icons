import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarWeekStart28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25zm0-1.5h15.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v15.5c0 .97.78 1.75 1.75 1.75zm2.5-3.75a.75.75 0 01-.74-.65L8 19V9a.75.75 0 011.5-.1V19c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
};

export default CalendarWeekStart28Regular;