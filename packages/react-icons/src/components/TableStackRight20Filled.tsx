import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM3 15v-2h4v4H5a2 2 0 01-2-2zm5 2v-4h4v3.5a.5.5 0 01-.5.5H8zm0-5h4V8H8v4zM3 8v4h4V8H3zm9-1H8V3h3.5c.28 0 .5.22.5.5V7zM3 7V5c0-1.1.9-2 2-2h2v4H3z" fill={primaryFill} /></svg>;
};

export default TableStackRight20Filled;