import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Album24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h1v16H4a2 2 0 01-2-2V6z" fill={primaryFill} /><path d="M16 8.5h-4a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M6.5 20H20a2 2 0 002-2V6a2 2 0 00-2-2H6.5v16zM12 7h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V9c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
};

export default Album24Filled;