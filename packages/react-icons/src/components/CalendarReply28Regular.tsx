import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarReply28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v8.25a7.49 7.49 0 00-1.5-.88V9.5h-19v12.25c0 .97.78 1.75 1.75 1.75h7.37c.24.54.53 1.04.88 1.5H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75V8h19V6.25c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-8.15-2.65a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L17.71 20h2.54A2.75 2.75 0 0123 22.75V23a.5.5 0 001 0v-.25A3.75 3.75 0 0020.25 19h-2.54l1.14-1.15z" fill={primaryFill} /></svg>;
};

export default CalendarReply28Regular;