import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackAbove20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zM15 17h-2v-4h4v2a2 2 0 01-2 2zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12zm-5 0V8H8v4h4zm-4 5h4v-4H8v4zM7 8v4H3V8.5c0-.28.22-.5.5-.5H7zm0 9H5a2 2 0 01-2-2v-2h4v4z" fill={primaryFill} /></svg>;
};

export default TableStackAbove20Filled;