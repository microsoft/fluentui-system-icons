import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextContinuous24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M8.75 9a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75z" fill={primaryFill} /><path d="M8 13.75c0-.41.34-.75.75-.75h11.5a.75.75 0 010 1.5H8.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.75 17a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3.22 11.03a.75.75 0 111.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 01-1.06-1.06l.97-.97-.97-.97z" fill={primaryFill} /></svg>;
};

export default TextContinuous24Regular;