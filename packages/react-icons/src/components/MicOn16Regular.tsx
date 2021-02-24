import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOn16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.5a2.5 2.5 0 015 0V8a2.5 2.5 0 01-5 0V4.5zM8 3c-.83 0-1.5.67-1.5 1.5V8a1.5 1.5 0 103 0V4.5C9.5 3.67 8.83 3 8 3z" fill={primaryFill} /><path d="M4 7.5c.28 0 .5.22.5.5a3.5 3.5 0 107 0 .5.5 0 011 0 4.5 4.5 0 01-4 4.47v1.03a.5.5 0 01-1 0v-1.03A4.5 4.5 0 013.5 8c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default MicOn16Regular;