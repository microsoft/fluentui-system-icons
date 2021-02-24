import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PositionBackward24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 6.5h-5.75a4.25 4.25 0 00-4.25 4.25v5.75H5.25A3.25 3.25 0 012 13.25v-8C2 3.45 3.46 2 5.25 2h8c1.8 0 3.25 1.46 3.25 3.25V6.5z" fill={primaryFill} /><path d="M22 18.75c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 01-3.25-3.25v-8c0-1.8 1.46-3.25 3.25-3.25h8c1.8 0 3.25 1.46 3.25 3.25v8zm-3.25 1.75c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75h-8C9.78 9 9 9.78 9 10.75v8c0 .97.78 1.75 1.75 1.75h8z" fill={primaryFill} /></svg>;
};

export default PositionBackward24Filled;