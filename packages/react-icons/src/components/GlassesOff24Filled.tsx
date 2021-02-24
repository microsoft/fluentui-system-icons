import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlassesOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l3.27 3.27-2.86 3.12-.05.05-.03.06c-.34.4-.55.9-.55 1.47v3.5C2 16.55 3.46 18 5.25 18h2.5c1.8 0 3.25-1.46 3.25-3.25V12.5h.44L13 14.06v.69c0 1.8 1.46 3.25 3.25 3.25h.69l3.78 3.78a.75.75 0 001.06-1.06L3.28 2.22zM7.94 9H5.28l1.27-1.38L7.94 9z" fill={primaryFill} /><path d="M13.3 10.12l7.3 7.3a3.25 3.25 0 001.4-2.67v-3.5c0-.53-.18-1.02-.49-1.4a.75.75 0 00-.12-.18l-3.64-3.95-.14-.13C17.2 5.21 16.66 5 16.1 5h-.94a.75.75 0 00.1 1.5h.94c.18.03.34.11.45.24L18.73 9h-3.48c-.83 0-1.56.45-1.95 1.12z" fill={primaryFill} /></svg>;
};

export default GlassesOff24Filled;