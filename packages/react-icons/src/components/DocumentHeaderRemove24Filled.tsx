import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentHeaderRemove24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.48 3.02a.5.5 0 000 .71l1.77 1.77-1.76 1.77a.5.5 0 00.7.7l1.77-1.76 1.77 1.77a.5.5 0 00.7-.71l-1.76-1.77 1.77-1.77a.5.5 0 10-.7-.7l-1.78 1.76-1.77-1.77a.5.5 0 00-.7 0z" fill={primaryFill} /><path d="M8.75 6.5a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-6.5z" fill={primaryFill} /><path d="M17.75 2c1.19 0 2.16.92 2.24 2.1v7.4A6.5 6.5 0 0012.8 22H6.26c-1.2 0-2.17-.93-2.25-2.1V4.24C4 3.07 4.92 2.09 6.1 2h11.65zM7 6.75v1.5C7 9.22 7.78 10 8.75 10h6.5c.97 0 1.75-.78 1.75-1.75v-1.5C17 5.78 16.22 5 15.25 5h-6.5C7.78 5 7 5.78 7 6.75z" fill={primaryFill} /></svg>;
};

export default DocumentHeaderRemove24Filled;