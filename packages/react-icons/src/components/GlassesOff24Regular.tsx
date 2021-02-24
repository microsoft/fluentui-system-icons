import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlassesOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l3.27 3.27-2.86 3.12-.05.05-.03.06c-.34.4-.55.9-.55 1.47v3.5C2 16.55 3.46 18 5.25 18h2.5c1.8 0 3.25-1.46 3.25-3.25V12.5h.44L13 14.06v.69c0 1.8 1.46 3.25 3.25 3.25h.69l3.78 3.78a.75.75 0 001.06-1.06L3.28 2.22zM7.94 9H5.28l1.27-1.38L7.94 9zm-3.69 1.5h4.5c.41 0 .75.34.75.75v3.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M13.3 10.12l1.2 1.2v-.07c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v3.5c0 .7-.4 1.3-1 1.57l1.1 1.1a3.25 3.25 0 001.4-2.67v-3.5c0-.53-.18-1.02-.49-1.4a.75.75 0 00-.12-.18l-3.64-3.95-.14-.13C17.2 5.21 16.66 5 16.1 5H14.65a.75.75 0 00.1 1.5H16.19c.18.03.34.11.45.24L18.73 9h-3.48c-.83 0-1.56.45-1.95 1.12z" fill={primaryFill} /></svg>;
};

export default GlassesOff24Regular;