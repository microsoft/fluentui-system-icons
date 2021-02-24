import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PlugDisconnected24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.7 3.7a1 1 0 00-1.4-1.4l-1.8 1.79a4.25 4.25 0 00-5.26.6l-1.06 1.07c-.69.69-.69 1.8 0 2.48l3.58 3.58c.69.69 1.8.69 2.48 0l1.07-1.06a4.25 4.25 0 00.6-5.26l1.8-1.8z" fill={primaryFill} /><path d="M10.7 11.7a1 1 0 00-1.4-1.4l-1.48 1.46-.29-.29a.75.75 0 00-1.06 0l-1.78 1.77a4.25 4.25 0 00-.6 5.26l-1.8 1.8a1 1 0 101.42 1.4l1.8-1.79a4.25 4.25 0 005.25-.6l1.77-1.78c.3-.3.3-.77 0-1.06l-.3-.3 1.48-1.46a1 1 0 00-1.42-1.42l-1.47 1.47-1.58-1.58 1.47-1.47z" fill={primaryFill} /></svg>;
};

export default PlugDisconnected24Filled;