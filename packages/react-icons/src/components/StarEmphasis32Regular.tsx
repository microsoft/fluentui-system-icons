import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarEmphasis32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.39 4.07a1.8 1.8 0 013.23 0l3.04 6.17 6.8.99a1.8 1.8 0 011 3.07l-4.92 4.8 1.16 6.77a1.8 1.8 0 01-2.61 1.9L16 24.57l-6.08 3.2a1.8 1.8 0 01-2.61-1.9l1.16-6.78-4.92-4.8a1.8 1.8 0 011-3.06l6.8-1 3.04-6.16zM16 5.32l-2.9 5.9c-.27.53-.78.9-1.36.98l-6.5.95 4.7 4.59c.42.41.62 1 .52 1.59L9.35 25.8l5.81-3.06a1.8 1.8 0 011.68 0l5.82 3.06-1.11-6.48c-.1-.58.09-1.18.51-1.6l4.71-4.58-6.5-.95a1.8 1.8 0 01-1.36-.98l-2.9-5.9zm9.3 4.26a1 1 0 010-1.42l3-3a1 1 0 111.4 1.42l-3 3a1 1 0 01-1.4 0zm-23 13.58a1 1 0 101.4 1.42l3-3a1 1 0 10-1.4-1.42l-3 3zm0-18a1 1 0 011.4 0l3 3a1 1 0 01-1.4 1.42l-3-3a1 1 0 010-1.42zm24.4 15a1 1 0 00-1.4 1.42l3 3a1 1 0 001.4-1.42l-3-3z" fill={primaryFill} /></svg>;
};

export default StarEmphasis32Regular;