import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncOff12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.65 2.15a.5.5 0 000 .7L5.9 4.1a.5.5 0 10.7-.7L6.21 3A3 3 0 018.9 6.79l.78.78A3.99 3.99 0 006.2 2.01l.4-.4A.5.5 0 105.9.9L4.65 2.15z" fill={primaryFill} /><path d="M2.32 4.44A3.99 3.99 0 005.8 9.99l-.4.4a.5.5 0 00.7.71l1.25-1.25a.5.5 0 000-.7L6.1 7.9a.5.5 0 10-.7.7l.39.4A3 3 0 013.1 5.21l-.78-.78z" fill={primaryFill} /><path d="M10.15 10.85a.5.5 0 00.7-.7l-9-9a.5.5 0 10-.7.7l9 9z" fill={primaryFill} /></svg>;
};

export default ArrowSyncOff12Regular;