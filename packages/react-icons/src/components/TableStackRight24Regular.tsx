import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 3.75a.75.75 0 00-.75-.75h-8.5A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h8.5c.41 0 .75-.34.75-.75V3.75zM14 10v4h-4v-4h4zm-9.5 4v-4h4v4h-4zM14 8.5h-4v-4h4v4zm-5.5 0h-4V6.25c0-.97.78-1.75 1.75-1.75H8.5v4zm0 11H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4v4zm1.5-4h4v4h-4v-4z" fill={primaryFill} /><path d="M19.5 3.75a.75.75 0 011.5 0v16.5a.75.75 0 01-1.5 0V3.75z" fill={primaryFill} /></svg>;
};

export default TableStackRight24Regular;