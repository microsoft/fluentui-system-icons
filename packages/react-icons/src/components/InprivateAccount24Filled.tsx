import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InprivateAccount24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14c1.21 0 2.2.95 2.25 2.15v.1h-8v1h7.98a3.75 3.75 0 01-.51 1.5H12v1h6.64C17.08 21.25 14.85 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5zM12 2a5 5 0 014 2h-4v1h4.58c.2.47.34.97.4 1.5H12v1h4.98a4.97 4.97 0 01-.4 1.5H12v1h4a5 5 0 11-4-8z" fill={primaryFill} /></svg>;
};

export default InprivateAccount24Filled;