import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckboxUnchecked12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5C10 2.67 9.33 2 8.5 2h-5zm0 1h5c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default CheckboxUnchecked12Regular;