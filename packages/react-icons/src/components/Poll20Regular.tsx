import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Poll20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4a2 2 0 114 0v12a2 2 0 11-4 0V4zm2-1a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1z" fill={primaryFill} /><path d="M2 12a2 2 0 114 0v4a2 2 0 11-4 0v-4zm2-1a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z" fill={primaryFill} /><path d="M16 6a2 2 0 00-2 2v8a2 2 0 104 0V8a2 2 0 00-2-2zm-1 2a1 1 0 112 0v8a1 1 0 11-2 0V8z" fill={primaryFill} /></svg>;
};

export default Poll20Regular;