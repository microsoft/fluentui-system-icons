import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tv28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v10.5C2 19.55 3.46 21 5.25 21h17.5c1.8 0 3.25-1.45 3.25-3.25V7.25C26 5.45 24.55 4 22.75 4H5.25z" fill={primaryFill} /><path d="M6 23.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default Tv28Filled;