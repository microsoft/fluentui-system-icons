import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAlert20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3a2.5 2.5 0 00-2.3 1.52l.3-.02A2 2 0 113 8.44v6.06A2.5 2.5 0 005.5 17h4.1a5.48 5.48 0 010-5H7.5a.5.5 0 010-1h2.76A5.49 5.49 0 0117 9.6V5.5A2.5 2.5 0 0014.5 3h-9zM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 5.5a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM16.5 13a2 2 0 10-4 0v1.8l-.35.35a.5.5 0 00.35.85h4a.5.5 0 00.35-.85l-.35-.36V13zm-3.41 4a1.5 1.5 0 002.82 0H13.1z" fill={primaryFill} /></svg>;
};

export default ChannelAlert20Filled;