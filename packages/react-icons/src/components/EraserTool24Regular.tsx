import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EraserTool24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 2.25c.38 0 .7.28.74.65l.01.1v14a4.75 4.75 0 01-4.53 4.75H8a4.75 4.75 0 01-4.75-4.53V3.5a.75.75 0 011.5-.1v3.4h14.5V3c0-.41.34-.75.75-.75zm-.75 11.25H4.75V17a3.25 3.25 0 003.07 3.24l.18.01h8a3.25 3.25 0 003.24-3.07l.01-.18v-3.5zm0-5.2H4.75V12h14.5V8.3z" fill={primaryFill} /></svg>;
};

export default EraserTool24Regular;