import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceUnknown12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM0 6a6 6 0 1112 0A6 6 0 010 6z" fill={primaryFill} /></svg>;
};

export default PresenceUnknown12Regular;