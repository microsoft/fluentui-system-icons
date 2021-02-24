import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafTwo24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.7V9a6 6 0 006.3 6c.26.88.69 1.69 1.25 2.39l-2.33 2.33a.75.75 0 001.06 1.06l2.33-2.33A7 7 0 0022 13V7.75C22 6.78 21.22 6 20.25 6H15c-.58 0-1.15.07-1.69.2A6 6 0 008.01 3H3.7C2.77 3 2 3.76 2 4.7zm9.68 12.68l4.1-4.1a.75.75 0 00-1.06-1.06l-4.1 4.1A5.5 5.5 0 0115 7.5h5.25c.14 0 .25.1.25.25V13a5.5 5.5 0 01-8.82 4.38zM8 4.5c1.66 0 3.1.9 3.89 2.23a7.03 7.03 0 00-2.71 2.39l-1.9-1.9a.75.75 0 00-1.06 1.06l2.24 2.24a6.98 6.98 0 00-.44 2.98H8A4.5 4.5 0 013.5 9V4.7c0-.1.1-.2.2-.2H8z" fill={primaryFill} /></svg>;
};

export default LeafTwo24Regular;