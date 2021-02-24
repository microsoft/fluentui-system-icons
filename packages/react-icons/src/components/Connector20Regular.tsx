import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Connector20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.5a.5.5 0 00-1 0v2.8L2.15 8.14A.5.5 0 002 8.5v5c0 .28.22.5.5.5H4v2.5a.5.5 0 001 0V14h1v2.5a.5.5 0 001 0V14h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.15-.35L7 6.29V3.5a.5.5 0 00-1 0v3c0 .13.05.26.15.35L8 8.71V13H3V8.7l1.85-1.85A.5.5 0 005 6.5v-3z" fill={primaryFill} /><path d="M15 16.5v-3a.5.5 0 01.15-.35L17 11.29V7h-5v4.3l1.85 1.85c.1.09.15.22.15.35v3a.5.5 0 01-1 0v-2.8l-1.85-1.85a.5.5 0 01-.15-.35v-5c0-.28.22-.5.5-.5h.5V3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V6h.5c.28 0 .5.22.5.5v5a.5.5 0 01-.15.35L16 13.71v2.79a.5.5 0 01-1 0zM13 6h3V4h-3v2z" fill={primaryFill} /></svg>;
};

export default Connector20Regular;