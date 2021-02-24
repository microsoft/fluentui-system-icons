import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Temperature24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a3.25 3.25 0 013.24 3.07l.01.18v7.95l.08.07a4.99 4.99 0 011.64 3.22l.02.26.01.25a5 5 0 11-8.51-3.56l.18-.17.08-.07V5.25a3.25 3.25 0 012.88-3.23l.19-.01L12 2zm0 1.5c-.92 0-1.67.7-1.74 1.6l-.01.15v8.7l-.3.22a3.5 3.5 0 104.27.13l-.16-.13-.3-.22-.01-8.7c0-.97-.78-1.75-1.75-1.75zM12 8c.41 0 .75.34.75.75v5.86a2.5 2.5 0 11-1.5 0V8.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Temperature24Regular;