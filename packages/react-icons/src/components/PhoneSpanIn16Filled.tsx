import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneSpanIn16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.09c.2.07.4.19.56.35l2 2a1.5 1.5 0 010 2.12l-2 2a1.5 1.5 0 01-.56.35V13c0 1.1.9 2 2 2h4a2 2 0 002-2v-1.09a1.5 1.5 0 01-.56-.35l-2-2a1.5 1.5 0 010-2.12l2-2c.16-.16.36-.28.56-.35V3a2 2 0 00-2-2H6z" fill={primaryFill} /><path d="M3.15 6.85a.5.5 0 11.7-.7l2 2a.5.5 0 010 .7l-2 2a.5.5 0 01-.7-.7L4.29 9H1.5a.5.5 0 010-1h2.8L3.14 6.85z" fill={primaryFill} /><path d="M12.85 6.15c.2.2.2.5 0 .7L11.71 8h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
};

export default PhoneSpanIn16Filled;