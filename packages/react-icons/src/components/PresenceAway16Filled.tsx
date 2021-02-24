import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceAway16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm.5-11.5v3.02l2.12 1.7a1 1 0 11-1.24 1.56l-2.5-2A1 1 0 016.5 8V4.5a1 1 0 012 0z" fill={primaryFill} /></svg>;
};

export default PresenceAway16Filled;