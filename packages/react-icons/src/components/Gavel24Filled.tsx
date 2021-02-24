import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Gavel24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.73 2.71c.98-.98 2.6-.85 3.4.27l.33.44-6.47 6.47-.38-.25a2.25 2.25 0 01-.35-3.46l3.47-3.47z" fill={primaryFill} /><path d="M9.26 10.74l2.56 1.7c.09.07.16.14.22.23l1.23 1.94 6.01-6.01-2.15-1.57a.75.75 0 01-.16-.16l-1.62-2.22-6.1 6.1z" fill={primaryFill} /><path d="M14.36 16.32l-.26-.42L20.5 9.5l.51.37a2.25 2.25 0 01.27 3.41l-3.44 3.44a2.25 2.25 0 01-3.49-.39z" fill={primaryFill} /><path d="M9.34 12.3l-6.07 5.96a1.76 1.76 0 102.47 2.5l6.09-6.09-.8-1.24-1.69-1.13z" fill={primaryFill} /><path d="M14.75 19a.75.75 0 000 1.5h-2a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-2a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /></svg>;
};

export default Gavel24Filled;