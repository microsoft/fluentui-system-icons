import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextLineSpacing24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.53 3.22l2 2a.75.75 0 01-1.06 1.06l-.72-.72v4.69a.75.75 0 01-1.5 0V5.56l-.72.72a.75.75 0 11-1.06-1.06l2-2a.75.75 0 011.06 0z" fill={primaryFill} /><path d="M2 5.75c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 012 5.75z" fill={primaryFill} /><path d="M2 12.25c0-.41.34-.75.75-.75h11.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.75 18a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /><path d="M18.25 18.44v-4.69a.75.75 0 011.5 0v4.69l.72-.72a.75.75 0 111.06 1.06l-2 2a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72z" fill={primaryFill} /></svg>;
};

export default TextLineSpacing24Regular;