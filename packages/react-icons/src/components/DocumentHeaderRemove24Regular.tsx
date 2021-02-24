import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentHeaderRemove24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.99 4.1A2.25 2.25 0 0017.75 2H6.09A2.25 2.25 0 004 4.25v15.5l.01.15A2.25 2.25 0 006.25 22h6.55a6.52 6.52 0 01-1.07-1.5H6.25l-.1-.01a.75.75 0 01-.65-.75V4.14a.75.75 0 01.75-.64h11.6c.36.05.64.37.64.75v6.83c.53.08 1.03.22 1.5.42V4.09z" fill={primaryFill} /><path d="M14.33 22A5.5 5.5 0 1020.67 13a5.5 5.5 0 00-6.34 8.98zm3.17-5.2l1.77-1.78a.5.5 0 11.71.71l-1.77 1.77 1.77 1.77a.5.5 0 11-.71.7l-1.77-1.76-1.77 1.76a.5.5 0 11-.7-.7l1.76-1.77-1.77-1.77a.5.5 0 01.71-.7l1.77 1.76z" fill={primaryFill} /><path d="M7 6.75C7 5.78 7.78 5 8.75 5h6.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 10 7 9.22 7 8.25v-1.5zm1.75-.25a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-6.5z" fill={primaryFill} /></svg>;
};

export default DocumentHeaderRemove24Regular;