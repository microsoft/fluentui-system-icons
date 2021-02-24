import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Money24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75C2 5.78 2.78 5 3.75 5h13.5c.97 0 1.75.78 1.75 1.75v8.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 17 2 16.22 2 15.25v-8.5zm3-.5v1c0 .41-.34.75-.75.75h-1v1.5h1c1.24 0 2.25-1 2.25-2.25v-1H5zm5.5 7.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-7.25.5h1c.41 0 .75.34.75.75v1h1.5v-1c0-1.24-1-2.25-2.25-2.25h-1V14zm12.75.75c0-.41.34-.75.75-.75h1v-1.5h-1c-1.24 0-2.25 1-2.25 2.25v1H16v-1zm0-7.5v-1h-1.5v1c0 1.24 1 2.25 2.25 2.25h1V8h-1a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M4.4 18.5A3 3 0 007 20h10.25A4.75 4.75 0 0022 15.25V10a3 3 0 00-1.5-2.6v7.85c0 1.8-1.46 3.25-3.25 3.25H4.4z" fill={primaryFill} /></svg>;
};

export default Money24Filled;