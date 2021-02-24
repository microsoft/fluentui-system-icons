import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableDeleteColumn24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 3.75a.75.75 0 00-.75-.75h-1A3.25 3.25 0 0017 6.25v11.5c0 1.8 1.46 3.25 3.25 3.25h1a.75.75 0 000-1.5h-1c-.97 0-1.75-.78-1.75-1.75V15.5h2.75a.75.75 0 000-1.5H18.5v-4h2.75a.75.75 0 000-1.5H18.5V6.25c0-.97.78-1.75 1.75-1.75h1c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M2 3.75c0-.41.34-.75.75-.75h1C5.55 3 7 4.46 7 6.25v11.5C7 19.55 5.54 21 3.75 21h-1a.75.75 0 010-1.5h1c.97 0 1.75-.78 1.75-1.75V15.5H2.75a.75.75 0 010-1.5H5.5v-4H2.75a.75.75 0 010-1.5H5.5V6.25c0-.97-.78-1.75-1.75-1.75h-1A.75.75 0 012 3.75z" fill={primaryFill} /><path d="M10.94 12l-1.47 1.47a.75.75 0 101.06 1.06L12 13.06l1.47 1.47a.75.75 0 101.06-1.06L13.06 12l1.47-1.47a.75.75 0 10-1.06-1.06L12 10.94l-1.47-1.47a.75.75 0 10-1.06 1.06L10.94 12z" fill={primaryFill} /><path d="M11.25 8.73l.08.07.67.67.67-.67.08-.07V2.75a.75.75 0 00-1.5 0v5.98z" fill={primaryFill} /><path d="M11.25 15.52v5.73a.75.75 0 001.5 0v-5.73a1.83 1.83 0 01-.08-.07l-.67-.67-.67.67-.08.07z" fill={primaryFill} /></svg>;
};

export default TableDeleteColumn24Regular;