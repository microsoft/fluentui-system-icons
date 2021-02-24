import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextSortDescending24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2a.75.75 0 100 1.5h3.39L4.12 9.85A.75.75 0 004.75 11H9.5a.75.75 0 000-1.5H6.11l4.02-6.35A.75.75 0 009.5 2H4.75zm2.32 10c-.3 0-.59.19-.7.48l-3.32 8.5a.75.75 0 001.4.54l.79-2.02h3.55l.76 2.01a.75.75 0 001.4-.52l-3.18-8.5a.75.75 0 00-.7-.49zm-.02 2.85L8.23 18h-2.4l1.22-3.15zm4.17 1.37c.3-.3.77-.3 1.06 0l3.22 3.22V2.75a.75.75 0 011.5 0v16.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default TextSortDescending24Regular;