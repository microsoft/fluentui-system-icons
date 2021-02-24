import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Poll20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a2 2 0 00-2 2v12a2 2 0 104 0V4a2 2 0 00-2-2z" fill={primaryFill} /><path d="M4 10a2 2 0 00-2 2v4a2 2 0 104 0v-4a2 2 0 00-2-2z" fill={primaryFill} /><path d="M16 6a2 2 0 00-2 2v8a2 2 0 104 0V8a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
};

export default Poll20Filled;