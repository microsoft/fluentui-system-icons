import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cut24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.14 9.34L7.37 2.33a.75.75 0 10-1.24.84l5.13 7.55-2.4 3.74a4 4 0 101.18.94l2.14-3.33 2.06 3.03A3.99 3.99 0 0017 22a4 4 0 10-1.5-7.71l-2.44-3.6-.92-1.35zM4.5 18a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm10 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={primaryFill} /><path d="M13.94 9.32l3.94-6.17a.75.75 0 10-1.26-.8l-3.6 5.62.92 1.35z" fill={primaryFill} /></svg>;
};

export default Cut24Regular;