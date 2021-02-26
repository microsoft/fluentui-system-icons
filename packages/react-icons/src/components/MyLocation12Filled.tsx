import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MyLocation12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm.75-5.68a4 4 0 013.18 3.18h1.32a.75.75 0 010 1.5H9.93a4 4 0 01-3.18 3.18v1.32a.75.75 0 01-1.5 0V10v-.07a4 4 0 01-3.18-3.18H.75a.75.75 0 010-1.5h1.32a4 4 0 013.18-3.18V.75a.75.75 0 011.5 0v1.32zM8.5 6a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
};

export default MyLocation12Filled;