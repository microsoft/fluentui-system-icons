import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cube16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.7 5.04a.5.5 0 10-.4.92l3.2 1.37v3.17a.5.5 0 101 0V7.33l3.2-1.37a.5.5 0 10-.4-.92L8 6.46 4.7 5.04z" fill={primaryFill} /><path d="M9.08 1.38a3 3 0 00-2.16 0l-4.96 1.9A1.5 1.5 0 001 4.69v6.63c0 .62.38 1.18.96 1.4l4.96 1.91a3 3 0 002.16 0l4.96-1.9c.58-.23.96-.79.96-1.4V4.68a1.5 1.5 0 00-.96-1.4L9.08 1.38zm-1.8.93a2 2 0 011.44 0l4.96 1.91c.2.07.32.26.32.47v6.62c0 .21-.13.4-.32.47l-4.96 1.9a2 2 0 01-1.44 0l-4.96-1.9a.5.5 0 01-.32-.47V4.7c0-.21.13-.4.32-.47l4.96-1.9z" fill={primaryFill} /></svg>;
};

export default Cube16Regular;