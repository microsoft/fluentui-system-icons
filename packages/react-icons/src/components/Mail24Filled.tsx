import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mail24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 8.6v8.15a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75V8.61l9.65 5.05c.22.12.48.12.7 0L22 8.61zM5.25 4h13.5a3.25 3.25 0 013.23 2.92L12 12.15 2.02 6.92a3.25 3.25 0 013.04-2.91L5.25 4h13.5-13.5z" fill={primaryFill} /></svg>;
};

export default Mail24Filled;