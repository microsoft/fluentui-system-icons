import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceBlocked16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-2 0c0-1.3-.41-2.5-1.1-3.48L4.51 12.9A6 6 0 0014 8zm-2.52-4.9a6 6 0 00-8.37 8.37l8.37-8.36z" fill={primaryFill} /></svg>;
};

export default PresenceBlocked16Regular;