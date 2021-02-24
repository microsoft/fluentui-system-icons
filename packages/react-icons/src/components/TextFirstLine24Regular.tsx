import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextFirstLine24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.78 3.22a.75.75 0 00-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /><path d="M9.75 5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H9.75z" fill={primaryFill} /><path d="M2.75 18a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2 12.25c0-.41.34-.75.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default TextFirstLine24Regular;