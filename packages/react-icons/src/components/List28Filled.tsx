import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const List28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 20a1 1 0 110 2H4a1 1 0 110-2h16zm4-7a1 1 0 110 2H4a1 1 0 110-2h20zm-2-7a1 1 0 110 2H4a1 1 0 110-2h18z" fill={primaryFill} /></svg>;
};

export default List28Filled;