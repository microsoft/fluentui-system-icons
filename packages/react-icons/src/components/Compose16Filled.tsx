import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Compose16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75A2.75 2.75 0 014.75 2h4.5a.75.75 0 110 1.5h-4.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.5a.75.75 0 011.5 0v4.5A2.75 2.75 0 0111.25 14h-6.5A2.75 2.75 0 012 11.25v-6.5z" fill={primaryFill} /><path d="M14.78 1.22c.3.3.3.77 0 1.06l-7.5 7.5L6 10l.22-1.28 7.5-7.5c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default Compose16Filled;