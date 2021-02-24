import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagOff48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 7.75l.08-.1a1.25 1.25 0 011.67-.15l.1.08 27.5 25.5a1.25 1.25 0 01-1.6 1.92l-.1-.08L27.77 29H12.5v9.75a1.25 1.25 0 01-2.5.13V12.52l-3.35-3.1a1.25 1.25 0 01-.15-1.67l.08-.1-.08.1zm5.38.25h24.87c.92 0 1.5.95 1.14 1.76l-.05.1-4.9 8.64 4.9 8.63c.45.8-.08 1.78-.97 1.86l-.12.01h-2.23L11.88 8z" fill={primaryFill} /></svg>;
};

export default FlagOff48Filled;