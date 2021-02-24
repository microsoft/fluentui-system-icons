import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /><path d="M2 12a5 5 0 015-5h10a5 5 0 010 10H7a5 5 0 01-5-5zm5-3.5a3.5 3.5 0 100 7h10a3.5 3.5 0 100-7H7z" fill={primaryFill} /></svg>;
};

export default ToggleRight24Regular;