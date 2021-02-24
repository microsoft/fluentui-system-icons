import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Search28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2.75a8.75 8.75 0 016.7 14.38l6.83 6.84a.75.75 0 01-.98 1.13l-.08-.07-6.84-6.84A8.75 8.75 0 1111.5 2.75zm0 1.5a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5z" fill={primaryFill} /></svg>;
};

export default Search28Regular;