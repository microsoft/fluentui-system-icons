import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Symbols24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12.75a1 1 0 011 .9v2.85h2.75a1 1 0 011 .9v.12a1 1 0 01-.9.97l-.12.01H7.5v2.75a1 1 0 01-.9 1h-.12a1 1 0 01-.97-.9l-.01-.12V18.5H2.75a1 1 0 01-1-.9v-.12a1 1 0 01.9-.97l.12-.01H5.5v-2.75a1 1 0 01.77-.97l.08-.02h.08l.07-.01zm10.42 5a1 1 0 011 1 1 1 0 01-.9 1h-.48a2.75 2.75 0 003.84-.68 1 1 0 111.64 1.14 4.74 4.74 0 01-6.61 1.2l-.03.1a1 1 0 01-.96.74 1 1 0 01-1-.9v-2.6a1 1 0 01.9-1h2.6zm4.28-5a1 1 0 011 .9v2.6a1 1 0 01-.9 1h-2.6a1 1 0 01-1-1 1 1 0 01.9-1h.48a2.75 2.75 0 00-3.84.68 1 1 0 11-1.64-1.14 4.74 4.74 0 016.61-1.2l.02-.1a1 1 0 01.97-.74zm-14.7-11a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zM3.91 4.98a3 3 0 004.1 4.1l-4.1-4.1zM6.5 3.5c-.56 0-1.08.15-1.52.41l4.1 4.11A3 3 0 006.5 3.5zm12.71-1.75c1.7 0 3.04 1.5 3.04 3.33a3.4 3.4 0 01-.89 2.35l-2.52 3.16a1.74 1.74 0 01-2.73 0l-2.69-3.42a3.52 3.52 0 01-.67-2.1c0-1.82 1.35-3.32 3.04-3.32.6 0 1.2.2 1.71.58l.02-.02c.5-.36 1.09-.56 1.7-.56z" fill={primaryFill} /></svg>;
};

export default Symbols24Filled;