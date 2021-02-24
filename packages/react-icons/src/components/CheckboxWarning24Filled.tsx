import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckboxWarning24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2a3 3 0 013 3v7.9l-.26-.52a2.5 2.5 0 00-4.47 0L11.46 20H5a3 3 0 01-3-3V5a3 3 0 013-3h12zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3c.3.3.77.3 1.06 0l7-7a.75.75 0 00-1.06-1.06zm.7 5.86l-4 8A1.5 1.5 0 0013.5 23h8a1.5 1.5 0 001.33-2.17l-4-8a1.5 1.5 0 00-2.68 0zM18 15.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
};

export default CheckboxWarning24Filled;