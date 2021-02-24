import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /><path d="M22 12a5 5 0 00-5-5H7a5 5 0 000 10h10a5 5 0 005-5zm-5-3.5a3.5 3.5 0 110 7H7a3.5 3.5 0 110-7h10z" fill={primaryFill} /></svg>;
};

export default ToggleLeft24Regular;