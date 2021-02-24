import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bug24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.75a.75.75 0 00-1.5 0v.75c0 .64.2 1.22.53 1.7A3.75 3.75 0 007.01 8.5h-.25A2.25 2.25 0 014.5 6.23V4.75a.75.75 0 10-1.5-.01v1.48A3.75 3.75 0 006.75 10H7v1.51H2.75a.75.75 0 000 1.5H7v2h-.25A3.75 3.75 0 003 18.75v1.48a.75.75 0 001.5 0v-1.49c0-1.24 1-2.25 2.24-2.26h.48a5 5 0 009.54 0h.47a2.25 2.25 0 012.25 2.26v1.49a.75.75 0 001.5 0v-1.48a3.75 3.75 0 00-3.74-3.77H17V13h4.25a.75.75 0 000-1.5H17V9.99h.25c2.07 0 3.75-1.7 3.74-3.77V4.74a.75.75 0 00-1.5 0v1.5c0 1.23-1 2.24-2.24 2.25h-.26a3.75 3.75 0 00-2.52-3.28c.33-.49.53-1.07.53-1.7v-.76a.75.75 0 00-1.5 0v.75a1.5 1.5 0 01-3 0v-.75zm-2 6c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1.01 2.25 2.25V15a3.5 3.5 0 11-7 0V8.75z" fill={primaryFill} /></svg>;
};

export default Bug24Regular;