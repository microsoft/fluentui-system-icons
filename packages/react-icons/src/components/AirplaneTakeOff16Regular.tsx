import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AirplaneTakeOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.1 5.56l-.76-.99a1.6 1.6 0 012.17-2.29l2.1 1.44c.25-.32.55-.66.9-.95.53-.43 1.2-.77 2-.77 1.54.01 2.65 1.21 3.24 2.02.57.8.11 1.78-.7 2.08l-2.23.82-3.1 4.48c-.94 1.35-3.06.42-2.7-1.18l.31-1.41-3.1.87A1.75 1.75 0 011 8V5.16c0-1.21 1.64-1.59 2.17-.5l.6 1.25 1.34-.35zm.03-1.6l1.03 1.32 1.04-.27c.3-.08.57-.25.8-.5l-2.06-1.4a.6.6 0 00-.8.85zm4 .74a2.96 2.96 0 01-1.67 1.28l-3.83 1a.5.5 0 01-.58-.26L2.27 5.1c-.03-.05-.05-.06-.07-.07a.15.15 0 00-.1 0 .15.15 0 00-.07.04c-.01.01-.03.04-.03.09V8c0 .5.47.86.95.72l3.1-.87a1 1 0 011.26 1.18l-.32 1.4c-.12.54.59.85.9.4l3.2-4.61a.5.5 0 01.24-.19l2.38-.87a.44.44 0 00.27-.26.3.3 0 00-.05-.3C13.37 3.84 12.52 3 11.5 3c-.49 0-.94.2-1.35.54A5.2 5.2 0 009.14 4.7z" fill={primaryFill} /><path d="M1.5 14a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /></svg>;
};

export default AirplaneTakeOff16Regular;