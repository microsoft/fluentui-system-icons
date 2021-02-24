import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkbox124Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2a3 3 0 013 3v8.52c-.3.04-.6.16-.84.36l-2.5 2a1.75 1.75 0 001.84 2.95v.77c-.44.25-.95.4-1.5.4H5a3 3 0 01-3-3V5a3 3 0 013-3h12zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3c.3.3.77.3 1.06 0l7-7a.75.75 0 00-1.06-1.06zM21 15.25a.75.75 0 00-1.22-.59l-2.5 2a.75.75 0 10.94 1.18l1.28-1.03v4.44a.75.75 0 001.5 0v-6z" fill={primaryFill} /></svg>;
};

export default Checkbox124Filled;