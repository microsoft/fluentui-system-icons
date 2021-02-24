import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSync20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.59 3.64a.5.5 0 010-.71L10.7.8a.5.5 0 11.7.7l-1 1a7.5 7.5 0 014.08 13.5.5.5 0 01-.6-.8A6.5 6.5 0 009.86 3.5l1.55 1.55a.5.5 0 01-.7.7L8.59 3.65z" fill={primaryFill} /><path d="M11.41 16.36c.2.2.2.52 0 .71L9.3 19.2a.5.5 0 01-.7-.7l1-1A7.5 7.5 0 015.5 3.99a.5.5 0 11.6.8 6.5 6.5 0 004.03 11.71l-1.55-1.55a.5.5 0 11.7-.7l2.12 2.11z" fill={primaryFill} /></svg>;
};

export default ArrowSync20Regular;