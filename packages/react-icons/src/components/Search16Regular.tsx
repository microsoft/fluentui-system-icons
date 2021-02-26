import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Search16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 10.02a4.5 4.5 0 11.7-.7l3.85 3.83a.5.5 0 01-.7.7L9.3 10.02zM10 6.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z" fill={primaryFill} /></svg>;
};

export default Search16Regular;