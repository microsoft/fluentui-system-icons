import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wrench20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 2a4.5 4.5 0 00-4.42 5.36l-6.42 6.66a2.36 2.36 0 003.37 3.3l6.37-6.46a4.51 4.51 0 005.49-5.37.5.5 0 00-.84-.24L14.5 7.79 12.2 5.5l2.55-2.55a.5.5 0 00-.24-.84A4.51 4.51 0 0013.5 2z" fill={primaryFill} /></svg>;
};

export default Wrench20Filled;