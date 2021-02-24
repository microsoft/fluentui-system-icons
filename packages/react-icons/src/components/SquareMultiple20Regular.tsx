import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SquareMultiple20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 4H5.05A2.5 2.5 0 017.5 2H14a4 4 0 014 4v6.5a2.5 2.5 0 01-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 00-3-3H7.5c-.65 0-1.2.42-1.41 1z" fill={primaryFill} /><path d="M4.5 5A2.5 2.5 0 002 7.5v8A2.5 2.5 0 004.5 18h8a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0012.5 5h-8zM3 7.5C3 6.67 3.67 6 4.5 6h8c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 013 15.5v-8z" fill={primaryFill} /></svg>;
};

export default SquareMultiple20Regular;