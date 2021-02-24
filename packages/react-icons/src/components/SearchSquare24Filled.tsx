import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SearchSquare24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zM11 7a4 4 0 102.03 7.45l2.26 2.26.1.08a1 1 0 001.32-1.5l-2.26-2.26A4 4 0 0011 7zm0 2a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
};

export default SearchSquare24Filled;