import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Collections24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.07 8h7.68a3.25 3.25 0 013.24 3.06l.01.19v7.5a3.25 3.25 0 01-3.07 3.24h-7.68a3.25 3.25 0 01-3.24-3.06L8 18.75v-7.5A3.25 3.25 0 0111.07 8zm7.68 1.5h-7.5c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5c0 .92.7 1.67 1.6 1.74h7.65c.92 0 1.67-.7 1.74-1.6l.01-.14v-7.5c0-.97-.78-1.75-1.75-1.75zM15 11c.41 0 .75.34.75.75v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 110-1.5h2.5v-2.5c0-.41.34-.75.75-.75zm.58-6.77l.05.18.7 2.59h-1.56l-.58-2.2a1.75 1.75 0 00-2.15-1.24L4.8 5.5a1.75 1.75 0 00-1.27 2l.03.14L5.5 14.9c.2.72.8 1.21 1.5 1.29v1.5a3.25 3.25 0 01-2.9-2.23l-.05-.17-1.94-7.25c-.45-1.67.5-3.39 2.12-3.92l.18-.06 7.24-1.94c1.68-.45 3.4.5 3.93 2.12z" fill={primaryFill} /></svg>;
};

export default Collections24Regular;