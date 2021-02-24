import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tent12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.43 1.46a.5.5 0 00-.77 0c-.72.87-2.18 1.92-3.01 2.39a.5.5 0 00-.25.37L1.74 9H1.5a.5.5 0 100 1h9a.5.5 0 100-1h-.14L9.7 4.22a.5.5 0 00-.25-.37 12.87 12.87 0 01-3.02-2.4zM8.44 9c-.8-1.15-1.38-2.3-1.92-4.36a.5.5 0 00-.97 0C4.95 6.94 4.26 8.12 3.62 9h-.87l.6-4.4c.78-.47 1.9-1.28 2.7-2.08.8.8 1.92 1.61 2.7 2.08l.6 4.4h-.9zm-1.2 0h-2.4c.4-.63.81-1.42 1.2-2.5.35 1 .74 1.77 1.2 2.5z" fill={primaryFill} /></svg>;
};

export default Tent12Regular;