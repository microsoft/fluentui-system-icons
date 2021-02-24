import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeTable24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2h5a.75.75 0 010 1.5h-5c-.97 0-1.75.78-1.75 1.75v3.13c-.58.26-1.1.65-1.5 1.13V5.25C2 3.45 3.46 2 5.25 2z" fill={primaryFill} /><path d="M15.62 20.5c-.26.58-.65 1.1-1.13 1.5h4.26c1.8 0 3.25-1.46 3.25-3.25v-5a.75.75 0 00-1.5 0v5c0 .97-.78 1.75-1.75 1.75h-3.13z" fill={primaryFill} /><path d="M21.25 11c.41 0 .75-.34.75-.75v-5C22 3.45 20.54 2 18.75 2h-5a.75.75 0 000 1.5h5c.97 0 1.75.78 1.75 1.75v5c0 .41.34.75.75.75z" fill={primaryFill} /><path d="M5.25 9A3.25 3.25 0 002 12.25v6.5C2 20.55 3.46 22 5.25 22h6.5c1.8 0 3.25-1.46 3.25-3.25v-6.5C15 10.45 13.54 9 11.75 9h-6.5zM3.5 12.25c0-.97.78-1.75 1.75-1.75H6V13H3.5v-.75zM6 14.5V17H3.5v-2.5H6zM7.5 17v-2.5h2V17h-2zm3.5 0v-2.5h2.5V17H11zm-3.5 1.5h2v2h-2v-2zm3.5 0h2.5v.25c0 .97-.78 1.75-1.75 1.75H11v-2zm0-8h.75c.97 0 1.75.78 1.75 1.75V13H11v-2.5zM9.5 13h-2v-2.5h2V13zM6 18.5v2h-.75c-.97 0-1.75-.78-1.75-1.75v-.25H6z" fill={primaryFill} /></svg>;
};

export default ResizeTable24Regular;