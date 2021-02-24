import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiselect20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.23 3.17c.32.27.36.74.1 1.06l-2.5 3a.75.75 0 01-1 .14l-1.5-1a.75.75 0 01.84-1.24l.94.62 2.06-2.48a.75.75 0 011.06-.1z" fill={primaryFill} /><path d="M18 5.75c0 .41-.34.75-.75.75h-8.5a.75.75 0 010-1.5h8.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M18 15.75c0 .41-.34.75-.75.75h-8.5a.75.75 0 010-1.5h8.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M17.25 11.5a.75.75 0 000-1.5h-8.5a.75.75 0 000 1.5h8.5z" fill={primaryFill} /><path d="M7.33 14.23a.75.75 0 10-1.16-.96l-2.06 2.48-.94-.62a.75.75 0 10-.84 1.24l1.5 1c.32.22.75.15 1-.14l2.5-3z" fill={primaryFill} /></svg>;
};

export default Multiselect20Filled;