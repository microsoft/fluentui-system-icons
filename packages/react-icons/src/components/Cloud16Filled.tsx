import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cloud16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.93 4.37A3.82 3.82 0 018 3c.85 0 1.84.28 2.63.93a3.73 3.73 0 011.35 2.6c.69.08 1.35.34 1.89.75A2.77 2.77 0 0115 9.5c0 .88-.3 1.65-.92 2.2-.62.54-1.5.8-2.58.8h-7c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 9.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15z" fill={primaryFill} /></svg>;
};

export default Cloud16Filled;