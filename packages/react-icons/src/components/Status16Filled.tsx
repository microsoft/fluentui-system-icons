import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Status16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.35 1.65a2.27 2.27 0 00-3.2 0L6.9 5.9a.5.5 0 00-.12.2L5.53 9.83a.5.5 0 00.63.63L9.9 9.22a.5.5 0 00.2-.12l4.24-4.25c.89-.88.89-2.32 0-3.2z" fill={primaryFill} /><path d="M12.99 7.63L13 8a5 5 0 11-4.63-4.99l.88-.88A6.02 6.02 0 002 8a6 6 0 1011.87-1.25l-.88.88z" fill={primaryFill} /></svg>;
};

export default Status16Filled;