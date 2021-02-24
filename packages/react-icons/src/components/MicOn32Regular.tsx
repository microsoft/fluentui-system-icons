import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOn32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a6 6 0 00-6 6v8a6 6 0 0012 0V8a6 6 0 00-6-6zm4 14a4 4 0 01-8 0V8a4 4 0 018 0v8zM7 15a1 1 0 011 1 8 8 0 1016 0 1 1 0 112 0 10 10 0 01-9 9.95V29a1 1 0 11-2 0v-3-.05A10 10 0 016 16a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default MicOn32Regular;