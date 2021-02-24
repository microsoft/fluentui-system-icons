import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClockAlarm24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 3.48A4 4 0 103.48 9.1a8.99 8.99 0 001.65 8.71l-1.91 1.91a.75.75 0 101.06 1.06l1.9-1.9a8.96 8.96 0 0011.63 0l1.91 1.9a.75.75 0 101.06-1.06l-1.9-1.9a8.96 8.96 0 001.64-8.72 4 4 0 10-5.62-5.62 8.99 8.99 0 00-5.8 0zM6 3.5c.63 0 1.2.23 1.65.62a9.04 9.04 0 00-3.53 3.53A2.5 2.5 0 016 3.5zm10.35.62a2.5 2.5 0 013.53 3.53 9.04 9.04 0 00-3.53-3.53zM11.25 7c.41 0 .75.34.75.75V12h2.75a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default ClockAlarm24Filled;