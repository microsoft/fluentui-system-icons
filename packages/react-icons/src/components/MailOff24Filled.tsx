import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.25 1.25c-.8.52-1.35 1.4-1.45 2.4l8.07 4.23 2.43 2.42-.17.08a.75.75 0 01-.7 0L2 8.61v8.32A3.25 3.25 0 005.26 20h13.68l1.79 1.78a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M15.3 12.12l6.26 6.26c.28-.48.44-1.04.44-1.63V8.61l-6.7 3.5z" fill={primaryFill} /><path d="M7.18 4l7 7 7.8-4.08A3.25 3.25 0 0018.75 4H7.18z" fill={primaryFill} /></svg>;
};

export default MailOff24Filled;