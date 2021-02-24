import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Table32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 4h-8v6h8V4zm0 8h-8v8h8v-8zm2 8v-8h6v8h-6zm-2 2h-8v6h8v-6zm2 6v-6h6v1a5 5 0 01-5 5h-1zm0-18V4h1a5 5 0 015 5v1h-6zM9 4h1v6H4V9a5 5 0 015-5zm-5 8h6v8H4v-8zm0 10h6v6H9a5 5 0 01-5-5v-1z" fill={primaryFill} /></svg>;
};

export default Table32Filled;