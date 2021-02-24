import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wifi324Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.94 16.44a1.5 1.5 0 112.12 2.12 1.5 1.5 0 01-2.12-2.12zm-2.5-2.62a5.1 5.1 0 018.28 1.58.75.75 0 11-1.38.6A3.6 3.6 0 008.75 16a.75.75 0 11-1.37-.6c.26-.59.62-1.12 1.06-1.57z" fill={primaryFill} /></svg>;
};

export default Wifi324Regular;