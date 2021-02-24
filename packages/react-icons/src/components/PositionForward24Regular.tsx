import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionForward24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 22c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25H17.5V9h1.25c.97 0 1.75.78 1.75 1.75v8c0 .97-.78 1.75-1.75 1.75h-8c-.97 0-1.75-.78-1.75-1.75V17.5H7.5v1.25c0 1.8 1.46 3.25 3.25 3.25h8z" fill={primaryFill} /><path d="M13.25 16.5c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25h-8A3.25 3.25 0 002 5.25v8c0 1.8 1.46 3.25 3.25 3.25h8zM15 13.25c0 .97-.78 1.75-1.75 1.75h-.78L15 12.47v.78zm0-2.78L10.47 15h-2L15 8.47v2zM6.35 15h-1.1c-.23 0-.45-.04-.65-.13L14.87 4.6c.09.2.13.42.13.65v1.1L6.35 15zm-2.77-1.23a1.75 1.75 0 01-.08-.52v-1.28l8.47-8.47h1.28c.18 0 .36.03.52.08L3.57 13.77zM3.5 9.85V7.97L7.97 3.5h1.88L3.5 9.85zm0-4v-.6c0-.97.78-1.75 1.75-1.75h.6L3.5 5.85z" fill={primaryFill} /></svg>;
};

export default PositionForward24Regular;