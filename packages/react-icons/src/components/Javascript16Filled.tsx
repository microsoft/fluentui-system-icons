import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Javascript16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM7.5 6a.5.5 0 00-.5.5v4a.5.5 0 01-.5.5h-1a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-4a.5.5 0 00-.5-.5zm1 1.5V8c0 .83.67 1.5 1.5 1.5h.5c.28 0 .5.22.5.5v.5a.5.5 0 01-.5.5H9a.5.5 0 000 1h1.5c.83 0 1.5-.67 1.5-1.5V10c0-.83-.67-1.5-1.5-1.5H10a.5.5 0 01-.5-.5v-.5c0-.28.22-.5.5-.5h1.5a.5.5 0 000-1H10c-.83 0-1.5.67-1.5 1.5z" fill={primaryFill} /></svg>;
};

export default Javascript16Filled;