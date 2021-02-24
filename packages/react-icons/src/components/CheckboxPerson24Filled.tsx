import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckboxPerson24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2a3 3 0 013 3v7.15a3 3 0 00-3.24 4.83h-.26a2.5 2.5 0 00-2.5 2.5c0 .18 0 .35.03.52H5a3 3 0 01-3-3V5a3 3 0 013-3h12zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3c.3.3.77.3 1.06 0l7-7a.75.75 0 00-1.06-1.06zM19 12.98a2 2 0 012 2 2 2 0 11-2-2zm-2.5 5h5c.83 0 1.5.68 1.5 1.5 0 1.12-.46 2.01-1.21 2.62-.74.6-1.74.88-2.79.88a4.43 4.43 0 01-2.79-.88A3.19 3.19 0 0115 19.48c0-.82.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
};

export default CheckboxPerson24Filled;