import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cube24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.05 7.98a.75.75 0 01.97-.43L12 9.44l4.98-1.9a.75.75 0 11.54 1.41l-4.77 1.8v5.5a.75.75 0 01-1.5 0v-5.5l-4.77-1.8a.75.75 0 01-.43-.97z" fill={primaryFill} /><path d="M10.6 2.51c.9-.36 1.9-.36 2.8 0l7.5 3.04c.67.27 1.1.91 1.1 1.62v9.66c0 .7-.43 1.35-1.1 1.62l-7.5 3.04c-.9.36-1.9.36-2.8 0l-7.5-3.04c-.67-.27-1.1-.91-1.1-1.62V7.17c0-.7.43-1.35 1.1-1.62l7.5-3.04zm2.25 1.4a2.25 2.25 0 00-1.7 0l-7.5 3.03a.25.25 0 00-.15.23v9.66c0 .1.06.19.16.23l7.5 3.04c.54.22 1.14.22 1.69 0l7.5-3.04c.09-.04.15-.13.15-.23V7.17c0-.1-.06-.19-.16-.23l-7.5-3.04z" fill={primaryFill} /></svg>;
};

export default Cube24Regular;