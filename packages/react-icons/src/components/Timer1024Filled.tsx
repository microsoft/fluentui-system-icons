import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timer1024Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 15a2.5 2.5 0 012.5 2.33v2.17a2.5 2.5 0 01-5 .17V17.5a2.5 2.5 0 012.5-2.5zM12 5a8.5 8.5 0 018.47 9.14 3.46 3.46 0 00-3.57 1.02 1.75 1.75 0 00-2.06-1.11l-.14.04-1.5.5-.16.07-.15.08a1.76 1.76 0 00-.84 1.92l.04.15.06.16.08.14.1.15c.24.33.57.56.94.67l.15.04.08.01v3.27l.01.18v.44A8.5 8.5 0 1112 5zm4 10.65v5.6a.75.75 0 01-1.5.1v-4.56l-.51.17a.75.75 0 01-.91-.37l-.04-.1a.75.75 0 01.38-.9l.1-.05 1.5-.5c.45-.15.92.15.98.6zm3.5.85a1 1 0 00-1 .88v2.12a1 1 0 002 .12V17.5a1 1 0 00-1-1zM12 8c-.38 0-.7.28-.75.65V13.35a.75.75 0 001.5 0V8.65A.75.75 0 0012 8zm7.17-2.88l.08.06 1.15 1a.75.75 0 01-.9 1.2l-.09-.06-1.14-1a.75.75 0 01.9-1.2zM14.25 2.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
};

export default Timer1024Filled;