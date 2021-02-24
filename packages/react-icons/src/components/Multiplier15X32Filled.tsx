import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier15X32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 9.09c.49.19.8.65.8 1.16v11.5a1.25 1.25 0 11-2.5 0v-8.5c-.43.32-.95.68-1.6 1.07a1.25 1.25 0 01-1.3-2.14c1.03-.61 1.6-1.07 2.02-1.47.29-.27.48-.49.71-.75l.5-.56c.36-.38.9-.5 1.38-.31zM14.26 9c-.64 0-1.18.49-1.24 1.13l-.5 5a1.25 1.25 0 001.41 1.36l2.9-.41a2.35 2.35 0 11.33 4.67h-.43c-.7 0-1.38-.27-1.9-.74l-.72-.68a1.25 1.25 0 10-1.7 1.84l.72.67c.98.9 2.26 1.41 3.6 1.41h.43a4.85 4.85 0 10-.67-9.65l-1.33.2.23-2.3h4.87a1.25 1.25 0 100-2.5h-6zm10.88 7.37a1.25 1.25 0 00-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 001.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 001.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 00-1.76-1.76l-1.37 1.36-1.37-1.36zM11 22a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
};

export default Multiplier15X32Filled;