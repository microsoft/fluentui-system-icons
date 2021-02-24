import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarLtr24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 8.5v9.25c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V8.5h18zM7.25 15a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 15a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-4.75-4.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4.75 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4.75 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm1-7.5C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /></svg>;
};

export default CalendarLtr24Filled;