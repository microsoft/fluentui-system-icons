import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bot24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14C19 14 20 15 20 16.25v.9c0 1.1-.47 2.14-1.3 2.85-1.57 1.34-3.81 2-6.7 2s-5.13-.66-6.7-2A3.75 3.75 0 014 17.16v-.91C4 15.01 5.01 14 6.25 14h11.5zM11.9 2h.1c.38 0 .7.28.74.65l.01.1v.75h3.5c1.24 0 2.25 1 2.25 2.25v4.5c0 1.25-1 2.26-2.25 2.26h-8.5c-1.24 0-2.25-1.01-2.25-2.25V5.75c0-1.24 1-2.25 2.25-2.25h3.5v-.75c0-.38.28-.7.65-.74h.1-.1zM9.75 6.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4.5 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
};

export default Bot24Filled;