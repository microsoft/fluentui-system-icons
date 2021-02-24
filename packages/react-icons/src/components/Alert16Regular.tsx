import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Alert16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a4.5 4.5 0 00-4.5 4.5v2.4l-.96 2.41A.5.5 0 003 12h3a2 2 0 104 0h3a.5.5 0 00.46-.69l-.96-2.4V6.5A4.5 4.5 0 008 2zm1 10a1 1 0 01-1 1 1 1 0 01-1-1h2zM4.5 6.5a3.5 3.5 0 117 0V9c0 .06.01.12.04.18l.72 1.82H3.74l.72-1.82A.5.5 0 004.5 9V6.5z" fill={primaryFill} /></svg>;
};

export default Alert16Regular;