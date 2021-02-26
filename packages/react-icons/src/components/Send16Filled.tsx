import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Send16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.72 1.05a.5.5 0 00-.71.55l1.4 4.85c.06.18.21.32.4.35l5.69.95c.27.06.27.44 0 .5l-5.69.95a.5.5 0 00-.4.35l-1.4 4.85a.5.5 0 00.71.55l13-6.5a.5.5 0 000-.9l-13-6.5z" fill={primaryFill} /></svg>;
};

export default Send16Filled;