import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CellularDataCellularOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L11 12.06v7.29a.75.75 0 001.5-.1v-5.69l2.5 2.5v3.29a.75.75 0 001.5-.1v-1.69l4.22 4.22a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M19 15.82l1.5 1.5V5.64a.75.75 0 00-1.5.12v10.06z" fill={primaryFill} /><path d="M15 11.82l1.5 1.5V8.65a.75.75 0 00-1.5.1v3.07z" fill={primaryFill} /><path d="M3.75 17c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M7.75 14c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default CellularDataCellularOff24Regular;