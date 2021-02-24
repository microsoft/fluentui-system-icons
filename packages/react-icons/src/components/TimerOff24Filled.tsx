import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TimerOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4 4a8.5 8.5 0 1012.01 12.01l2.49 2.5a.75.75 0 001.06-1.07L3.28 2.22zm9.34 11.46a.75.75 0 01-1.36-.33l-.01-.1v-.94l1.37 1.37z" fill={primaryFill} /><path d="M12.75 8.75v.82l7.13 7.13A8.5 8.5 0 008.8 5.62l2.63 2.63a.75.75 0 011.3.4l.01.1z" fill={primaryFill} /><path d="M19.17 5.12l.08.06 1.15 1a.75.75 0 01-.9 1.2l-.08-.06-1.15-1a.75.75 0 01.9-1.2z" fill={primaryFill} /><path d="M14.25 2.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
};

export default TimerOff24Filled;