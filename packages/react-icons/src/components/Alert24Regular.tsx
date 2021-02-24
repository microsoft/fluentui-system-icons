import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Alert24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a7.5 7.5 0 017.5 7.25v4.35l1.38 3.15a1.25 1.25 0 01-1.15 1.75H15a3 3 0 01-6 .18v-.18H4.27a1.25 1.25 0 01-1.14-1.75L4.5 13.6V9.5C4.5 5.35 7.85 2 12 2zm1.5 16.5h-3a1.5 1.5 0 003 .15v-.15zM12 3.5c-3.32 0-6 2.67-6 6v4.4L4.66 17h14.7L18 13.9V9.29a5.99 5.99 0 00-6-5.78z" fill={primaryFill} /></svg>;
};

export default Alert24Regular;