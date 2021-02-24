import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionRotate270Ac24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h3V4a1 1 0 112 0v1h4.25a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 14a1 1 0 01-1-1V9a1 1 0 011-1h1.25c1.1 0 2.5.22 3.66.96A4.54 4.54 0 0112 13a1 1 0 11-2 0c0-1.26-.51-1.94-1.16-2.36A4.94 4.94 0 006.25 10H6v3a1 1 0 01-1 1z" fill={primaryFill} /><path d="M19.7 14.3a1 1 0 00-1.4 1.4l.29.3H5a1 1 0 100 2h13.59l-.3.3a1 1 0 001.42 1.4l2-2a1 1 0 000-1.4l-2-2z" fill={primaryFill} /><path d="M18.3 6.3a1 1 0 011.4 0l2 2a1 1 0 010 1.4l-2 2a1 1 0 01-1.4-1.4l.29-.3H15a1 1 0 110-2h3.59l-.3-.3a1 1 0 010-1.4z" fill={primaryFill} /></svg>;
};

export default TextDirectionRotate270Ac24Filled;