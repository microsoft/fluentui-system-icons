import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontSpaceTrackingIn20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.7 2.48a.75.75 0 00-1.4 0l-3.25 8.5a.75.75 0 001.4.53l.77-2.01h3.56l.77 2.01a.75.75 0 001.4-.53L7.7 2.48zM8.2 8H5.8L7 4.85 8.2 8z" fill={primaryFill} /><path d="M6.74 13.19a.75.75 0 10-.99 1.12l.5.44h-2.5a.75.75 0 000 1.5h2.5l-.5.44a.75.75 0 101 1.12l2-1.75a.75.75 0 00-.01-1.13l-2-1.74z" fill={primaryFill} /><path d="M13 12c.31 0 .59-.2.7-.48l3.25-8.5a.75.75 0 10-1.4-.53L13 9.15 10.45 2.5a.75.75 0 10-1.4.53l3.25 8.5c.11.29.39.48.7.48z" fill={primaryFill} /><path d="M14.31 17.74a.75.75 0 01-1.06.07l-2-1.74a.75.75 0 010-1.13l2-1.75a.75.75 0 011 1.12l-.5.44h2.5a.75.75 0 110 1.5h-2.5l.5.44c.3.27.34.74.06 1.05z" fill={primaryFill} /></svg>;
};

export default FontSpaceTrackingIn20Filled;