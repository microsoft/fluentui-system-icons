import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Shifts32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 8a1 1 0 011 1v7h5a1 1 0 010 2h-6a1 1 0 01-1-1V9a1 1 0 011-1zM9 4a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V9a5 5 0 00-5-5H9zM6 9a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H9a3 3 0 01-3-3V9z" fill={primaryFill} /></svg>;
};

export default Shifts32Regular;