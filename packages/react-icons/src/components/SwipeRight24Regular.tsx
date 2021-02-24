import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SwipeRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12c0 .38.28.7.64.74l.1.01h12.7l-2.22 2.22a.75.75 0 00-.07.98l.07.08c.27.27.69.3.98.07l.08-.07 3.5-3.5a.75.75 0 00.07-.98l-.07-.08-3.5-3.5a.75.75 0 00-1.13.98l.07.08 2.22 2.22H6.74A.75.75 0 006 12zm-4 0a5 5 0 009.68 1.75h-1.66a3.5 3.5 0 110-3.5h1.66A5 5 0 002 12z" fill={primaryFill} /></svg>;
};

export default SwipeRight24Regular;