import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonClock16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10c0 1.8 1.55 3.65 4.22 3.96A5.48 5.48 0 015.6 8H3.5C2.67 8 2 8.67 2 9.5v.5z" fill={primaryFill} /><path d="M6.33 6.92a5.5 5.5 0 013.3-1.85 2.75 2.75 0 10-3.3 1.85z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10.5 8a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H12a.5.5 0 000-1h-1V8.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default PersonClock16Filled;