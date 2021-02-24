import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRedo32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 4.25a1.25 1.25 0 10-2.5 0v6.19l-4.6-4.8a8.92 8.92 0 00-5.48-2.54A8.44 8.44 0 007.5 5.62 8.3 8.3 0 005 12.45a8.47 8.47 0 002.11 4.93l11.21 11.3a1.25 1.25 0 101.78-1.76L8.89 15.62a6.04 6.04 0 01-1.4-3.42 5.8 5.8 0 011.77-4.82 5.95 5.95 0 014.92-1.8c1.67.17 3.13.95 3.91 1.78l4.95 5.16H16.6a1.25 1.25 0 000 2.5h9.15c.7 0 1.25-.56 1.25-1.25V4.25z" fill={primaryFill} /></svg>;
};

export default ArrowRedo32Filled;