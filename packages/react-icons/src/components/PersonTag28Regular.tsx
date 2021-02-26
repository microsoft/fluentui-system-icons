import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonTag28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.22 25.15c-1.5.54-3.27.85-5.22.85-5.79 0-10-2.57-10-6.29V19a3 3 0 013-3h8v1.5H5c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79 1.5 0 2.86-.2 4.04-.54l1.18 1.19zm-2.13-12a3 3 0 00-.83.41 6 6 0 11.83-.42zM7.5 8a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5 8v3.68a2 2 0 00.59 1.41l5.32 5.32a2 2 0 002.83 0l3.67-3.67a2 2 0 000-2.83L21.1 14.6a2 2 0 00-1.41-.59H16a2 2 0 00-2 2zm3 2a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
};

export default PersonTag28Regular;