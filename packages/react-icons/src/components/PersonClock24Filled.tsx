import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonClock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5c0-1.29.38-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.93 0 1.8-.08 2.6-.24A6.48 6.48 0 0111 17.5z" fill={primaryFill} /><path d="M10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm2 5.5h-2V15a.5.5 0 10-1 0v3c0 .28.22.5.5.5h2.5a.5.5 0 000-1z" fill={primaryFill} /></svg>;
};

export default PersonClock24Filled;