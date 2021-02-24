import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncCircle20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.5-8a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v.7a3.5 3.5 0 015.6-.53.5.5 0 11-.74.66A2.5 2.5 0 007.71 9h.79a.5.5 0 010 1h-2zm7.5.5v2a.5.5 0 01-1 0v-.7a3.5 3.5 0 01-5.6.53.5.5 0 01.74-.66 2.5 2.5 0 004.15-.67h-.79a.5.5 0 110-1h2c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
};

export default ArrowSyncCircle20Filled;