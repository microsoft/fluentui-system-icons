import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Person28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 16a3 3 0 013 3v.71C24 23.3 19.79 26 14 26S4 23.43 4 19.71V19a3 3 0 013-3h14zM14 2a6 6 0 110 12 6 6 0 010-12z" fill={primaryFill} /></svg>;
};

export default Person28Filled;