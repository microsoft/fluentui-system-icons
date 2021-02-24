import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cart24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4.25c0-.41.34-.75.75-.75h.56c.95 0 1.52.64 1.84 1.23.22.4.38.86.5 1.27h12.6c.83 0 1.43.8 1.2 1.6L18.12 14a2.75 2.75 0 01-2.64 2H9.53a2.75 2.75 0 01-2.65-2.02l-.76-2.78-1.26-4.24v-.01c-.16-.57-.3-1.1-.52-1.5C4.13 5.07 3.96 5 3.8 5h-.56a.75.75 0 01-.75-.75zm5.07 6.59l.75 2.74c.15.54.65.92 1.21.92h5.95c.56 0 1.05-.37 1.2-.9l1.74-6.1H6.59l.97 3.29.01.05z" fill={primaryFill} /><path d="M11 19a2 2 0 11-4 0 2 2 0 014 0zm-1.5 0a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /><path d="M18 19a2 2 0 11-4 0 2 2 0 014 0zm-1.5 0a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
};

export default Cart24Regular;