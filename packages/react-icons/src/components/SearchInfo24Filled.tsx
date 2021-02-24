import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SearchInfo24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 10a7.25 7.25 0 10-2.68 5.63l4.9 4.9.08.07a.75.75 0 00.98-1.13l-4.9-4.9A7.22 7.22 0 0017.25 10zM11 7a1 1 0 11-2 0 1 1 0 012 0zm-1 2c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default SearchInfo24Filled;