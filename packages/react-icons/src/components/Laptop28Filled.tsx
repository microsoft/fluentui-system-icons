import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Laptop28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 8.25C4 7.01 5 6 6.25 6h15.5C22.99 6 24 7 24 8.25v9c0 1.24-1 2.25-2.25 2.25H6.25c-1.24 0-2.25-1-2.25-2.25v-9z" fill={primaryFill} /><path d="M2.75 20.5a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
};

export default Laptop28Filled;