import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 7.5c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v13a1.5 1.5 0 01-3 0v-9.38L23.56 26.56a1.5 1.5 0 01-2.12-2.12L36.88 9H27.5A1.5 1.5 0 0126 7.5z" fill={primaryFill} /><path d="M7 16.5A7.5 7.5 0 0114.5 9h7a1.5 1.5 0 010 3h-7a4.5 4.5 0 00-4.5 4.5v17.25a4.5 4.5 0 004.5 4.5h17a4.5 4.5 0 004.5-4.5V26.5a1.5 1.5 0 013 0v7.25a7.5 7.5 0 01-7.5 7.5h-17a7.5 7.5 0 01-7.5-7.5V16.5z" fill={primaryFill} /></svg>;
};

export default Open48Filled;