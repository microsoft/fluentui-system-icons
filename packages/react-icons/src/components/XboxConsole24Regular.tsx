import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const XboxConsole24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M5.75 2a.75.75 0 00-.75.75v18.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V2.75a.75.75 0 00-.75-.75H5.75zM9.5 20.5v-8.75a.75.75 0 00-1.5 0v8.75H6.5v-17h11v17h-8z" fill={primaryFill} /></svg>;
};

export default XboxConsole24Regular;