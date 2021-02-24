import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeLarge24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4.5c-.97 0-1.75.78-1.75 1.75v1.5a.75.75 0 01-1.5 0v-1.5C3 4.45 4.46 3 6.25 3h1.5a.75.75 0 010 1.5h-1.5z" fill={primaryFill} /><path d="M19.5 6.25c0-.97-.78-1.75-1.75-1.75h-1.5a.75.75 0 010-1.5h1.5C19.55 3 21 4.46 21 6.25v1.5a.75.75 0 01-1.5 0v-1.5z" fill={primaryFill} /><path d="M19.5 17.75c0 .97-.78 1.75-1.75 1.75h-1.5a.75.75 0 000 1.5h1.5c1.8 0 3.25-1.46 3.25-3.25v-1.5a.75.75 0 00-1.5 0v1.5z" fill={primaryFill} /><path d="M4.5 17.75c0 .97.78 1.75 1.75 1.75h1.5a.75.75 0 010 1.5h-1.5A3.25 3.25 0 013 17.75v-1.5a.75.75 0 011.5 0v1.5z" fill={primaryFill} /><path d="M8.25 6C7.01 6 6 7 6 8.25v7.5C6 16.99 7 18 8.25 18h7.5c1.24 0 2.25-1 2.25-2.25v-7.5C18 7.01 17 6 15.75 6h-7.5zM7.5 8.25c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v7.5c0 .41-.34.75-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z" fill={primaryFill} /></svg>;
};

export default ResizeLarge24Regular;