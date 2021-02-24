import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceAvailable12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12A6 6 0 106 0a6 6 0 000 12zm2.53-6.72L5.78 8.03c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 2.22-2.22a.75.75 0 011.06 1.06z" fill={primaryFill} /></svg>;
};

export default PresenceAvailable12Filled;