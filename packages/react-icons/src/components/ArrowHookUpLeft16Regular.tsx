import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 11.5c0 .28.22.5.5.5h3a3.4 3.4 0 002.62-1.1c.6-.67.88-1.54.88-2.4a3.6 3.6 0 00-.88-2.4A3.4 3.4 0 008.5 5H4.7l1.15-1.15a.5.5 0 10-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 10.7-.7L4.71 6H8.5c.86 0 1.48.32 1.88.77.4.46.62 1.09.62 1.73a2.6 2.6 0 01-.62 1.73A2.4 2.4 0 018.5 11h-3a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpLeft16Regular;