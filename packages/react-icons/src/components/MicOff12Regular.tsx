import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOff12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.15 1.15c.2-.2.5-.2.7 0l9 9a.5.5 0 01-.7.7L8.16 8.87c-.49.31-1.05.52-1.66.6v1.03a.5.5 0 11-1 0V9.47A4 4 0 012 5.5a.5.5 0 111 0 3 3 0 004.43 2.64l-.75-.76A2 2 0 014 5.5v-.8L1.15 1.86a.5.5 0 010-.7z" fill={primaryFill} /><path d="M7 3v1.88l.97.97c.02-.11.03-.23.03-.35V3a2 2 0 00-3.78-.9l.79.79A1 1 0 017 3z" fill={primaryFill} /><path d="M8.77 6.65l.75.75c.3-.57.48-1.21.48-1.9a.5.5 0 10-1 0 3 3 0 01-.23 1.15z" fill={primaryFill} /></svg>;
};

export default MicOff12Regular;