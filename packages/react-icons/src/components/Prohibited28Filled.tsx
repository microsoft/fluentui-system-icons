import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Prohibited28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm7.54 6.22L8.22 21.54A9.5 9.5 0 0021.54 8.22zM14 4.5a9.5 9.5 0 00-7.54 15.28L19.78 6.46A9.46 9.46 0 0014 4.5z" fill={primaryFill} /></svg>;
};

export default Prohibited28Filled;