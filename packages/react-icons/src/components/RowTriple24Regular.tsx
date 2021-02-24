import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RowTriple24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.77c0-.97.78-1.75 1.75-1.75h12.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75H5.75C4.78 8.02 4 7.24 4 6.27v-2.5zm1.75-.25a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25H5.75z" fill={primaryFill} /><path d="M4 10.77c0-.97.78-1.75 1.75-1.75h12.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75H5.75c-.97 0-1.75-.78-1.75-1.75v-2.5zm1.75-.25a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25H5.75z" fill={primaryFill} /><path d="M5.75 16.02c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h12.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75H5.75zm-.25 1.75c0-.14.11-.25.25-.25h12.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25H5.75a.25.25 0 01-.25-.25v-2.5z" fill={primaryFill} /></svg>;
};

export default RowTriple24Regular;