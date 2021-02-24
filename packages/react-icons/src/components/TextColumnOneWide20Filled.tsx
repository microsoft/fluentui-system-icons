import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnOneWide20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3.75 8a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3 11.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.75 14a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
};

export default TextColumnOneWide20Filled;