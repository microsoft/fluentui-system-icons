import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeHide24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22a.75.75 0 00-.07.98l.07.08 4.03 4.03a9.99 9.99 0 00-3.95 5.75.75.75 0 001.45.37 8.49 8.49 0 013.58-5.04l1.81 1.81A3.99 3.99 0 0012 17c1.09 0 2.08-.43 2.8-1.14l5.92 5.92a.75.75 0 001.13-.98l-.07-.08-6.11-6.11-1.2-1.2-2.87-2.87-2.88-2.88-1.13-1.13-4.31-4.31a.75.75 0 00-1.06 0zm7.98 9.05l3.54 3.53A2.5 2.5 0 019.5 13c0-.67.27-1.28.7-1.73zM12 5.5a10 10 0 00-2.89.42l1.24 1.24a8.52 8.52 0 019.9 6.27.75.75 0 001.45-.36A10 10 0 0012 5.5zm.2 3.5l3.8 3.81a4 4 0 00-3.8-3.8z" fill={primaryFill} /></svg>;
};

export default EyeHide24Regular;