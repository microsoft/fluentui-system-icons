import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Alert28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.47 22a3.5 3.5 0 01-6.94 0h6.94zM14 3a8.5 8.5 0 018.5 8.25v4.36l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H5.27a1.28 1.28 0 01-1.23-1.62l.04-.12L5.5 15.6v-4.1C5.5 6.8 9.3 3 14 3z" fill={primaryFill} /></svg>;
};

export default Alert28Filled;