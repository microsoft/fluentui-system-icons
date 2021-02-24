import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceAway10Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10A5 5 0 105 0a5 5 0 000 10zm0-7v1.8l1.35 1.35a.5.5 0 11-.7.7l-1.5-1.5A.5.5 0 014 5V3a.5.5 0 011 0z" fill={primaryFill} /></svg>;
};

export default PresenceAway10Filled;