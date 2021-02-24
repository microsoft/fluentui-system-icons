import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableCellsMerge24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75H11v3H4.5V6.25zm8 10.25h7v1.25c0 .97-.78 1.75-1.75 1.75H12.5v-3zm7-9h-7v-3h5.25c.97 0 1.75.78 1.75 1.75V7.5zm-8.5 9v3H6.25c-.97 0-1.75-.78-1.75-1.75V16.5H11zM4.5 9h15v6h-15V9z" fill={primaryFill} /></svg>;
};

export default TableCellsMerge24Regular;