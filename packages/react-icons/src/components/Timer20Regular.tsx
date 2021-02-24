import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timer20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M15.16 3.93a.5.5 0 10-.71.7l1.41 1.42a.5.5 0 10.71-.7l-1.41-1.42z" fill={primaryFill} /><path d="M9.5 6a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M9.5 18a7 7 0 100-14 7 7 0 000 14zm0-1a6 6 0 110-12 6 6 0 010 12z" fill={primaryFill} /></svg>;
};

export default Timer20Regular;