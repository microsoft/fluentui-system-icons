import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncCircle20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill={primaryFill} /><path d="M10 7.5A2.5 2.5 0 007.7 9h.8a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v.7a3.5 3.5 0 015.6-.53.5.5 0 11-.74.66A2.5 2.5 0 0010 7.5z" fill={primaryFill} /><path d="M13 11.8v.7a.5.5 0 101 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 100 1h.8a2.5 2.5 0 01-4.16.67.5.5 0 00-.75.66A3.5 3.5 0 0013 11.8z" fill={primaryFill} /></svg>;
};

export default ArrowSyncCircle20Regular;