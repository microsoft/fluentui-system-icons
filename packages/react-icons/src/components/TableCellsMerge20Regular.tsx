import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableCellsMerge20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3zM4 14h5v2H5.36A1.5 1.5 0 014 14.5V14zM5.5 4H9v2H4v-.64A1.5 1.5 0 015.5 4zM16 6h-6V4h4.64A1.5 1.5 0 0116 5.5V6zm0 1v6H4V7h12zm0 7v.64A1.5 1.5 0 0114.5 16H10v-2h6z" fill={primaryFill} /></svg>;
};

export default TableCellsMerge20Regular;