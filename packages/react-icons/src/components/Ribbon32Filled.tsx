import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Ribbon32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 21.81V29a1 1 0 001.51.86l4.49-2.7 4.49 2.7A1 1 0 0022 29v-7.19a11.45 11.45 0 01-12 0zm12-1.8a9.96 9.96 0 01-12.36-.3A10 10 0 1122 20z" fill={primaryFill} /></svg>;
};

export default Ribbon32Filled;