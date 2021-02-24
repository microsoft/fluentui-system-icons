import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationOff28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22c.3-.3.77-.3 1.06 0l22.5 22.5a.75.75 0 01-1.06 1.06l-4.91-4.9a40.2 40.2 0 01-4.67 4.64c-.66.56-1.62.56-2.28 0l-.38-.33C7.02 20.4 4.25 16.03 4.25 12c0-1.9.55-3.69 1.5-5.2L2.22 3.29a.75.75 0 010-1.06zM14.64 15.7a3.75 3.75 0 01-4.33-4.33L6.83 7.9A8.21 8.21 0 005.75 12c0 3.5 2.55 7.54 7.71 12.06l.38.32c.1.08.23.08.32 0a38.4 38.4 0 004.58-4.57l-4.1-4.11z" fill={primaryFill} /><path d="M8.79 5.6L7.72 4.55A9.75 9.75 0 0123.75 12c0 2.05-.72 4.19-2.14 6.43l-1.09-1.09A10.36 10.36 0 0022.25 12 8.25 8.25 0 008.79 5.6z" fill={primaryFill} /><path d="M13.11 9.93l-1.1-1.1A3.75 3.75 0 0117.18 14l-1.11-1.11A2.24 2.24 0 0014 9.75c-.31 0-.61.06-.89.18z" fill={primaryFill} /></svg>;
};

export default LocationOff28Regular;