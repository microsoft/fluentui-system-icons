import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableCellsMerge24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 21h5.25c1.8 0 3.25-1.46 3.25-3.25V17h-8.5v4z" fill={primaryFill} /><path d="M21 7v-.75C21 4.45 19.54 3 17.75 3H12.5v4H21z" fill={primaryFill} /><path d="M11 3H6.25A3.25 3.25 0 003 6.25V7h8V3z" fill={primaryFill} /><path d="M3 8.5v7h18v-7H3z" fill={primaryFill} /><path d="M3 17v.75C3 19.55 4.46 21 6.25 21H11v-4H3z" fill={primaryFill} /></svg>;
};

export default TableCellsMerge24Filled;