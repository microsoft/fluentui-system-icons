import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Search28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2a9.5 9.5 0 017.7 15.07l6.36 6.37a1.5 1.5 0 01-2 2.22l-.12-.1-6.37-6.37A9.5 9.5 0 1111.5 2zm0 3a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill={primaryFill} /></svg>;
};

export default Search28Filled;