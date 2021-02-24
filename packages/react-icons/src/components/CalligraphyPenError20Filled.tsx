import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalligraphyPenError20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 3a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.25zm0 2.87l.35-.01a2.5 2.5 0 01-.2.42l-3.47 5.91c-.15.27-.4.48-.68.59v-7.04a1 1 0 00.46-1.16c.95.8 2.19 1.29 3.54 1.29zM9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 00-.8 1.83v7.04a1.37 1.37 0 01-.68-.59l-3.47-5.9a2.5 2.5 0 01-.1-2.34l1.23-2.6A1.75 1.75 0 015 4.75v-2a.75.75 0 011.5 0v2c0 .14.11.25.25.25h2.27L9 5.5z" fill={primaryFill} /></svg>;
};

export default CalligraphyPenError20Filled;