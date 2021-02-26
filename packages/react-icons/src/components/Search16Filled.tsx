import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Search16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 10.17a4.5 4.5 0 111.06-1.06l3.62 3.61a.75.75 0 11-1.06 1.06l-3.61-3.61zm.4-3.67a3 3 0 10-6 0 3 3 0 006 0z" fill={primaryFill} /></svg>;
};

export default Search16Filled;