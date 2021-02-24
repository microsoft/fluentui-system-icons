import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.8 9.02C17.53 6.27 15.53 4 12 4S6.48 6.25 6.2 9.02h-.1A4.05 4.05 0 002 13C2 15.2 3.84 17 6.1 17h2.4l1-1-1.98-1.98a1.77 1.77 0 112.5-2.5L12 13.5l1.98-1.98a1.77 1.77 0 112.5 2.5L14.5 16l1 1h2.4c2.26 0 4.1-1.79 4.1-4 0-2.2-1.84-3.98-4.1-3.98h-.1z" fill={primaryFill} /><path d="M15.78 13.28a.75.75 0 10-1.06-1.06L12 14.94l-2.71-2.71-.08-.07a.75.75 0 00-.98.07l-.07.08c-.22.3-.2.72.07.98L10.93 16l-2.71 2.71a.75.75 0 101.06 1.06l2.71-2.7 2.73 2.72.09.07c.29.22.7.2.97-.07l.08-.09c.21-.3.19-.71-.08-.98L13.06 16l2.72-2.72z" fill={primaryFill} /></svg>;
};

export default CloudOff24Filled;