import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkSquare24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v6c0 1.8 1.46 3.25 3.25 3.25H7.5V14H6.25c-.97 0-1.75-.78-1.75-1.75v-6c0-.97.78-1.75 1.75-1.75h6c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75H11v1.5h1.25c1.8 0 3.25-1.46 3.25-3.25v-6c0-1.8-1.46-3.25-3.25-3.25h-6z" fill={primaryFill} /><path d="M10 11.75c0-.97.78-1.75 1.75-1.75H13V8.5h-1.25a3.25 3.25 0 00-3.25 3.25v6c0 1.8 1.46 3.25 3.25 3.25h6c1.8 0 3.25-1.46 3.25-3.25v-6c0-1.8-1.46-3.25-3.25-3.25H16.5V10h1.25c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75h-6c-.97 0-1.75-.78-1.75-1.75v-6z" fill={primaryFill} /></svg>;
};

export default LinkSquare24Regular;