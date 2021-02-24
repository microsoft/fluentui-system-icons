import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAddSpaceAfter24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75z" fill={primaryFill} /><path d="M3 12.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9.47 18.22a.75.75 0 101.06 1.06L12 17.81l1.47 1.47a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2z" fill={primaryFill} /></svg>;
};

export default TextAddSpaceAfter24Regular;