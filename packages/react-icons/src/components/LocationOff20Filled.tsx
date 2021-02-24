import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l2.12 2.13a7 7 0 00.78 8.98l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37.27-.27 3.06 3.05a.5.5 0 00.7-.7l-15-15zm8.23 9.63A2.98 2.98 0 017 9c0-.38.07-.74.2-1.07l3.87 3.86z" fill={primaryFill} /><path d="M13 9c0 .53-.15 1.04-.4 1.48l2.88 2.88a7 7 0 00-9.84-9.84L8.52 6.4A3 3 0 0113 9z" fill={primaryFill} /></svg>;
};

export default LocationOff20Filled;