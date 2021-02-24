import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EraserSmall24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.84 2.66c-.87-.89-2.3-.9-3.19-.02l-9.6 9.5c-.89.89-.89 2.33 0 3.21l5.1 5c.9.88 2.31.87 3.18-.01l1.79-1.8a4.51 4.51 0 01.02-2.16l-.35.35-6.09-6.09 7-6.94c.3-.29.78-.29 1.07.01l4.91 5.01c.29.3.29.76 0 1.05l-3.35 3.38a4.5 4.5 0 012.16-.04l2.25-2.28c.87-.88.87-2.28.01-3.16l-4.9-5zM5.64 11.7l6.1 6.1-1.47 1.48c-.3.3-.77.3-1.06 0l-5.1-5a.75.75 0 010-1.07l1.53-1.51z" fill={primaryFill} /><path d="M17.6 14a3.5 3.5 0 11-3.6 3.51v-.01a3.5 3.5 0 013.6-3.5z" fill={primaryFill} /></svg>;
};

export default EraserSmall24Regular;