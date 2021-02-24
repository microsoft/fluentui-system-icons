import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Payment24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A2.75 2.75 0 014.75 5h14.5A2.75 2.75 0 0122 7.75V9.5H2V7.75z" fill={primaryFill} /><path d="M2 11h20v5.25A2.75 2.75 0 0119.25 19H4.75A2.75 2.75 0 012 16.25V11zm13.75 3.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" fill={primaryFill} /></svg>;
};

export default Payment24Filled;