import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timeline24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 13c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 21 2 20.22 2 19.25v-4.5c0-.97.78-1.75 1.75-1.75h11.5zM21 14.9v5.35a.75.75 0 01-1.5.1V14.91a3 3 0 001.5-.01zm-.75-4.8a1.9 1.9 0 110 3.8 1.9 1.9 0 010-3.8zm-5-7.1C16.2 3 17 3.78 17 4.75v4.5c0 .97-.79 1.75-1.75 1.75H3.75C2.78 11 2 10.22 2 9.25v-4.5c0-.92.7-1.67 1.6-1.75h11.65zm5 0c.38 0 .7.28.74.65l.01.1V9.1a3 3 0 00-1.5-.02V3.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Timeline24Filled;