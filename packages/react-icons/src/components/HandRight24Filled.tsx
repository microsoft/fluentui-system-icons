import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.25a1 1 0 00-2 0V11a.5.5 0 11-1 0V6a1 1 0 00-2 0v8.75c0 2.18 1.17 4.51 1.91 5.8A3 3 0 009.54 22h2.16c1.24 0 2.36-.7 2.91-1.8l.14-.26c.42-.84.94-1.63 1.56-2.34l2.2-2.55 2.2-1.7a.75.75 0 00.29-.6c0-.48-.26-.84-.6-1.06-.29-.2-.64-.27-.95-.31a7.2 7.2 0 00-2.1.13c-.5.1-.97.3-1.35.5V4.26a1 1 0 10-2 0v6.25a.5.5 0 11-1 0V3a1 1 0 10-2 0v7.5a.5.5 0 11-1 0V4.25z" fill={primaryFill} /></svg>;
};

export default HandRight24Filled;