import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncOff12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.08 2.08a.6.6 0 000 .84l1.25 1.25a.6.6 0 00.88-.8A2.9 2.9 0 018.8 6.7l.95.94a4.09 4.09 0 00-2.9-5.65l.31-.32a.6.6 0 10-.84-.84L5.08 2.08z" fill={primaryFill} /><path d="M2.24 4.36a4.09 4.09 0 002.9 5.65l-.31.32a.6.6 0 00.84.84l1.25-1.25a.6.6 0 000-.84L5.67 7.83a.6.6 0 00-.88.8 2.9 2.9 0 01-1.6-3.32l-.95-.95z" fill={primaryFill} /><path d="M10.08 10.92a.6.6 0 10.84-.84l-9-9a.6.6 0 10-.84.84l9 9z" fill={primaryFill} /></svg>;
};

export default ArrowSyncOff12Filled;