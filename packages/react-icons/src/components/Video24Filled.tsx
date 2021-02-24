import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Video24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 16.25c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 012 16.25v-8.5C2 5.95 3.46 4.5 5.25 4.5h7.5c1.8 0 3.25 1.46 3.25 3.25v8.5zm5.76-10.36a1 1 0 01.24.65v10.92a1 1 0 01-1.65.76L17 15.37V8.63l3.35-2.85a1 1 0 011.41.11z" fill={primaryFill} /></svg>;
};

export default Video24Filled;