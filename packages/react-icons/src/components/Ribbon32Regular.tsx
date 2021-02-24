import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Ribbon32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a10 10 0 00-6 18v9a1 1 0 001.51.86l4.49-2.7 4.49 2.7A1 1 0 0022 29v-9a9.98 9.98 0 00-6-18zM8 12a8 8 0 1116 0 8 8 0 01-16 0zm12 9.17v6.06l-3.49-2.09a1 1 0 00-1.02 0L12 27.24v-6.07a9.97 9.97 0 008 0z" fill={primaryFill} /></svg>;
};

export default Ribbon32Regular;