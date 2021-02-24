import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 9a1 1 0 112 0v7h4a1 1 0 110 2h-5a1 1 0 01-1-1V9zm2 21a14 14 0 100-28 14 14 0 000 28zm0-2a12 12 0 110-24 12 12 0 010 24z" fill={primaryFill} /></svg>;
};

export default Clock32Regular;