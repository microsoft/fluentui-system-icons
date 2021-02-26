import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignLeft48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 5.25a1.25 1.25 0 112.5 0v37.5a1.25 1.25 0 11-2.5 0V5.25zM15.75 26a4.25 4.25 0 00-4.25 4.25v5.5c0 2.35 1.9 4.25 4.25 4.25h15C33.1 40 35 38.1 35 35.75v-5.5C35 27.9 33.1 26 30.75 26h-15zM14 30.25c0-.97.78-1.75 1.75-1.75h15c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-15c-.97 0-1.75-.78-1.75-1.75v-5.5zm-2.5-18v5.5c0 2.35 1.9 4.25 4.25 4.25H38c2.35 0 4.25-1.9 4.25-4.25v-5.5C42.25 9.9 40.35 8 38 8H15.75a4.25 4.25 0 00-4.25 4.25zm2.5 5.5v-5.5c0-.97.78-1.75 1.75-1.75H38c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H15.75c-.97 0-1.75-.78-1.75-1.75z" fill={primaryFill} /></svg>;
};

export default AlignLeft48Regular;