import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BackpackAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a3.75 3.75 0 00-3.74 3.42A8 8 0 004 12.5v6.25C4 20.55 5.46 22 7.25 22h5.56a6.52 6.52 0 01-1.08-1.5H7.25c-.97 0-1.75-.78-1.75-1.75v-3.04H8v1.54a.75.75 0 001.5 0v-1.54h1.75c.17-.6.44-1.19.77-1.71H5.5v-1.5a6.5 6.5 0 0112.84-1.45c.56.08 1.1.22 1.6.42a8 8 0 00-4.2-6.05A3.75 3.75 0 0012 2zm0 2.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 014.04 0A8.01 8.01 0 0012 4.5z" fill={primaryFill} /><path d="M14.03 12c.54-.34 1.12-.6 1.74-.77.15-.24.23-.52.23-.81A2.42 2.42 0 0013.58 8h-3.16A2.42 2.42 0 008 10.42c0 .87.7 1.58 1.58 1.58h4.45zM9.5 10.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 01-.08-.08z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
};

export default BackpackAdd24Regular;