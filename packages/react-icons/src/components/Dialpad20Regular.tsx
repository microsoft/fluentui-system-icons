import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dialpad20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M6 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M7 12a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11 16a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M14 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M15 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M14 13a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Dialpad20Regular;