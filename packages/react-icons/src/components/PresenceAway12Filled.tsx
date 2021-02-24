import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceAway12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12A6 6 0 106 0a6 6 0 000 12zm.5-8.75v2.4l1.49 1.28A.75.75 0 117 8.07l-1.75-1.5A.75.75 0 015 6V3.25a.75.75 0 011.5 0z" fill={primaryFill} /></svg>;
};

export default PresenceAway12Filled;