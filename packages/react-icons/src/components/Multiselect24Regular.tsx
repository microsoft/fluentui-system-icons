import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiselect24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.78 15.22c.27.27.3.69.08.98l-.08.08-3.5 3.5a.75.75 0 01-.89.13l-.09-.06-2-1.5a.75.75 0 01.8-1.26l.1.06 1.48 1.11 3.04-3.04c.3-.29.77-.29 1.06 0zM21.24 17a.75.75 0 01.1 1.5h-10.6a.75.75 0 01-.1-1.5h10.6zm.01-6a.75.75 0 01.1 1.5h-10.6a.75.75 0 01-.1-1.5h10.6zM8.78 3.22c.27.27.3.69.08.98l-.08.08-3.51 3.5a.75.75 0 01-.89.13l-.1-.06-1.98-1.5a.75.75 0 01.8-1.26l.1.06 1.47 1.1 3.05-3.03c.3-.3.77-.29 1.06 0zM21.24 5a.75.75 0 01.1 1.5H10.77a.75.75 0 01-.1-1.5h10.57z" fill={primaryFill} /></svg>;
};

export default Multiselect24Regular;