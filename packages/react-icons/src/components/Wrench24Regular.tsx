import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wrench24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 7.75a5.75 5.75 0 018.38-5.11.75.75 0 01.19 1.2L16.3 6.6l1.06 1.06 2.78-2.78a.75.75 0 011.2.18 5.75 5.75 0 01-6.42 8.28l-7.37 7.62a3.05 3.05 0 01-4.4-4.24L10.64 9c-.08-.4-.13-.81-.13-1.24zm5.75-4.25A4.25 4.25 0 0012.18 9c.08.26.01.54-.18.74l-7.76 8.04a1.55 1.55 0 102.23 2.15l7.67-7.94c.2-.2.5-.28.78-.2a4.25 4.25 0 005.46-5.02l-2.49 2.5c-.3.28-.77.28-1.06 0l-2.12-2.13a.75.75 0 010-1.06l2.47-2.47c-.3-.06-.61-.1-.93-.1z" fill={primaryFill} /></svg>;
};

export default Wrench24Regular;