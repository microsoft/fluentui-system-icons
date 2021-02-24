import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentCopy24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.75V2H8.75C7.51 2 6.5 3 6.5 4.25v13c0 1.24 1 2.25 2.25 2.25h9c1.24 0 2.25-1 2.25-2.25V9h-4.75C14.01 9 13 8 13 6.75z" fill={primaryFill} /><path d="M14.5 6.75V2.5l5 5h-4.25a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M5.5 4.63C4.63 4.93 4 5.77 4 6.75v10.5A4.75 4.75 0 008.75 22h6.5c.97 0 1.8-.62 2.12-1.5H8.75a3.25 3.25 0 01-3.25-3.25V4.63z" fill={primaryFill} /></svg>;
};

export default DocumentCopy24Filled;