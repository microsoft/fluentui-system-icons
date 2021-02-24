import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChatOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.2 2.2a9.96 9.96 0 00-1.28 11.17l-1.11 4.29a.85.85 0 001.04 1.04l4.29-1.12a9.96 9.96 0 0011.16-1.28l2.2 2.2a.75.75 0 001.06-1.06L3.28 2.22zm10.14 12.26l-.07.01-.1.01h-4.6a.75.75 0 010-1.5h3.29l1.48 1.48zM9.94 11H8.65a.75.75 0 01-.16-1.45L9.94 11z" fill={primaryFill} /><path d="M15.25 11h-1.07l6.3 6.3A10 10 0 006.7 3.52l5.98 5.98h2.67a.75.75 0 010 1.5h-.1z" fill={primaryFill} /></svg>;
};

export default ChatOff24Filled;