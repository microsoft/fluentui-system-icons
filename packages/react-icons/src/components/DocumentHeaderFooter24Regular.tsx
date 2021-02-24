import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentHeaderFooter24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.19 0 2.16.92 2.24 2.1v15.65c0 1.18-.92 2.16-2.1 2.24H6.26c-1.2 0-2.17-.92-2.25-2.1V4.25C4 3.07 4.92 2.09 6.1 2h11.65zm0 1.5H6.25c-.38 0-.7.28-.75.64v15.6c0 .38.28.7.64.75h11.6c.38 0 .7-.28.75-.64V4.25c0-.38-.28-.7-.64-.75h-.1z" fill={primaryFill} /><path d="M7 6.75C7 5.78 7.78 5 8.75 5h6.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 10 7 9.22 7 8.25v-1.5zm1.75-.25a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-6.5z" fill={primaryFill} /><path d="M7 15.75c0-.97.78-1.75 1.75-1.75h6.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 19 7 18.22 7 17.25v-1.5zm1.75-.25a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-6.5z" fill={primaryFill} /></svg>;
};

export default DocumentHeaderFooter24Regular;