import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 4.5h3.5a.75.75 0 01.1 1.5h-3.6c-1.18 0-2.15.9-2.24 2.06L5 8.22v8.53c0 1.2.93 2.17 2.1 2.24l.15.01 8.5-.01c1.2 0 2.16-.93 2.24-2.1v-3.65a.75.75 0 011.5-.11v3.6c0 2.01-1.56 3.65-3.54 3.75h-.2l-8.5.02h-.2a3.75 3.75 0 01-3.54-3.55V8.05a3.75 3.75 0 013.54-3.54l.2-.01h3.5-3.5zM14 3h6.05l.1.01.09.02.1.03.12.05.05.03a1 1 0 01.48.74L21 4v6a1 1 0 01-2 .12V6.41l-6.3 6.3a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1L17.6 5H14a1 1 0 01-.99-.88V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default Open24Filled;