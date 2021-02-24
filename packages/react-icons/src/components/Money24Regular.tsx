import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Money24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8a3 3 0 100 6 3 3 0 000-6zM9 11a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /><path d="M2 7.25C2 6.01 3 5 4.25 5h12.5C17.99 5 19 6 19 7.25v7.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 17 2 16 2 14.75v-7.5zm2.25-.75a.75.75 0 00-.75.75V8h.75c.41 0 .75-.34.75-.75V6.5h-.75zm-.75 6h.75c1.24 0 2.25 1 2.25 2.25v.75h8v-.75c0-1.24 1-2.25 2.25-2.25h.75v-3h-.75c-1.24 0-2.25-1-2.25-2.25V6.5h-8v.75c0 1.24-1 2.25-2.25 2.25H3.5v3zm14-4.5v-.75a.75.75 0 00-.75-.75H16v.75c0 .41.34.75.75.75h.75zm0 6h-.75a.75.75 0 00-.75.75v.75h.75c.41 0 .75-.34.75-.75V14zm-14 .75c0 .41.34.75.75.75H5v-.75a.75.75 0 00-.75-.75H3.5v.75z" fill={primaryFill} /><path d="M4.4 18.5A3 3 0 007 20h10.25A4.75 4.75 0 0022 15.25V10a3 3 0 00-1.5-2.6v7.85c0 1.8-1.46 3.25-3.25 3.25H4.4z" fill={primaryFill} /></svg>;
};

export default Money24Regular;