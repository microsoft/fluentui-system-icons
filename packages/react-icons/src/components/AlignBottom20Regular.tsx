import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignBottom20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 16.5c0 .28.22.5.5.5h15a.5.5 0 000-1h-15a.5.5 0 00-.5.5zm9-3.5c0 1.1.9 2 2 2h1a2 2 0 002-2V8a2 2 0 00-2-2h-1a2 2 0 00-2 2v5zm2 1a1 1 0 01-1-1V8a1 1 0 011-1h1a1 1 0 011 1v5a1 1 0 01-1 1h-1zm-7 1a2 2 0 01-2-2V5c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2H6zm-1-2a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H6a1 1 0 00-1 1v8z" fill={primaryFill} /></svg>;
};

export default AlignBottom20Regular;