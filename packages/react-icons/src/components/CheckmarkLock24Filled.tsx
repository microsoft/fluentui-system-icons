import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkLock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.81 11.94A3 3 0 0016 15v.05a2.5 2.5 0 00-2.01 2.45v4l.01.3A10 10 0 1112 2zm3.22 6.97l-4.47 4.47-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5-5a.75.75 0 10-1.06-1.06z" fill={primaryFill} /><path d="M17 16h-.51c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h5c.82 0 1.5-.67 1.5-1.5v-4c0-.83-.68-1.5-1.5-1.5H21v-1a2 2 0 10-4 0v1zm1-1a1 1 0 112 0v1h-2v-1zm1.75 4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
};

export default CheckmarkLock24Filled;