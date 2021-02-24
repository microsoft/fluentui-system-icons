import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Search24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.5a7.5 7.5 0 015.96 12.05l4.75 4.74a1 1 0 01-1.32 1.5l-.1-.08-4.74-4.75A7.5 7.5 0 1110 2.5zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" fill={primaryFill} /></svg>;
};

export default Search24Filled;