import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h7.31a6.52 6.52 0 01-1.08-1.5H5.5a1 1 0 01-1-1h6.81a6.5 6.5 0 018.19-8.19V4.5A2.5 2.5 0 0017 2H5.5zM7 5h8a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1zm16 12.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default BookAdd24Filled;