import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const History20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2h.09c.2.04.36.2.4.4l.01.1v2.2a8 8 0 11-2 4.77.5.5 0 011 .05 7 7 0 101.26-3.53H7.5l.09.01a.5.5 0 010 .99H3.41a.5.5 0 01-.4-.4L3 6.49V2.42a.5.5 0 01.41-.4L3.5 2zm6 4h.09c.2.04.36.2.4.4l.01.1v4h2.09a.5.5 0 010 1H9.41a.5.5 0 01-.4-.41l-.01-.1V6.42a.5.5 0 01.41-.4L9.5 6z" fill={primaryFill} /></svg>;
};

export default History20Regular;