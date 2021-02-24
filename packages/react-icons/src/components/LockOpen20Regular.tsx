import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockOpen20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a3 3 0 012.94 2.4.5.5 0 11-.98.2A2 2 0 008 4.85V7h6a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V9c0-1.1.9-2 2-2h1V5a3 3 0 013-3zm4 6H6a1 1 0 00-1 1v7a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1zm-4 3.5a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default LockOpen20Regular;