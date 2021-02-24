import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackAbove24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h16.5z" fill={primaryFill} /><path d="M14.5 9.5v5h-5v-5h5z" fill={primaryFill} /><path d="M9.5 16h5v5h-5v-5z" fill={primaryFill} /><path d="M8 9.5v5H3v-4.25c0-.41.34-.75.75-.75H8z" fill={primaryFill} /><path d="M8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5z" fill={primaryFill} /><path d="M21 16h-5v5h1.75c1.8 0 3.25-1.46 3.25-3.25V16z" fill={primaryFill} /><path d="M16 14.5h5v-4.25a.75.75 0 00-.75-.75H16v5z" fill={primaryFill} /></svg>;
};

export default TableStackAbove24Filled;