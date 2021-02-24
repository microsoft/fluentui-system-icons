import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Javascript16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 7.5c0-.83.67-1.5 1.5-1.5h1.5a.5.5 0 010 1H10a.5.5 0 00-.5.5V8c0 .28.22.5.5.5h.5c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5H9a.5.5 0 010-1h1.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5H10A1.5 1.5 0 018.5 8v-.5z" fill={primaryFill} /><path d="M8 6.5a.5.5 0 00-1 0v4a.5.5 0 01-.5.5h-1a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-4z" fill={primaryFill} /><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM4.5 3C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7z" fill={primaryFill} /></svg>;
};

export default Javascript16Regular;