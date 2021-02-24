import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarEdit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.52 19.58L11.16 21H6.25A3.25 3.25 0 013 17.75V8.5h18v2.51c-.93-.08-1.9.24-2.6.95l-5.91 5.9c-.47.48-.8 1.07-.97 1.72zM21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25V7h18v-.75zm-1.9 6.42l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default CalendarEdit24Filled;