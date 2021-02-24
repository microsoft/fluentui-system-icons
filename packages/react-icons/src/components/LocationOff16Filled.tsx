import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationOff16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.58 12.29l2.57 2.56a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.99 3.7A5.97 5.97 0 002 7c0 2.87 1.93 5.5 5.73 7.92.17.1.37.1.54 0a17.98 17.98 0 003.31-2.63zm-3.3-3.3L8 9a2 2 0 01-1.98-2.27l2.25 2.25z" fill={primaryFill} /><path d="M10 7a2 2 0 01-.14.74l2.98 2.98A6.76 6.76 0 0014 7a6 6 0 00-9.64-4.77l2.9 2.91A2 2 0 0110 7z" fill={primaryFill} /></svg>;
};

export default LocationOff16Filled;