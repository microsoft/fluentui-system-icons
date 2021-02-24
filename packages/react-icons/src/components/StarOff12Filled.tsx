import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOff12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.85 1.15a.5.5 0 10-.7.7l2.08 2.09-1.54.22a.8.8 0 00-.45 1.36l1.8 1.76-.42 2.47a.8.8 0 001.16.85L6 9.43l2.22 1.17a.8.8 0 001.15-.52l.78.77a.5.5 0 00.7-.7l-9-9z" fill={primaryFill} /><path d="M10.76 5.52L9.18 7.06 4.75 2.63l.53-1.08a.8.8 0 011.44 0L7.83 3.8l2.49.36c.65.1.91.9.44 1.36z" fill={primaryFill} /></svg>;
};

export default StarOff12Filled;