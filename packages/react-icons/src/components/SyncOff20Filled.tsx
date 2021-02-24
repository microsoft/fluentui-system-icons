import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SyncOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.94 9H12.3l.67-2.36a.5.5 0 00-.96-.28l-2 7a.5.5 0 00.96.28L12.02 10H18a8 8 0 01-16 0h5.98l-.96 3.36a.5.5 0 00.96.28l2-7a.5.5 0 00-.96-.28L8.27 9h-6.2a8 8 0 0115.87 0z" fill={primaryFill} /></svg>;
};

export default SyncOff20Filled;