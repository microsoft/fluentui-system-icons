import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Key16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6a1 1 0 100-2 1 1 0 000 2zm-3.5 6v-.5h1A.5.5 0 009 11v-1h1a4 4 0 10-3.84-2.87L2.3 11a1 1 0 00-.29.7V13a1 1 0 001 1h2a1 1 0 001-1v-.5h1a.5.5 0 00.5-.5zM7 6a3 3 0 113 3H8.5a.5.5 0 00-.5.5v1H7a.5.5 0 00-.5.5v.5h-1a.5.5 0 00-.5.5v1H3v-1.3l4.09-4.08a.5.5 0 00.11-.54A3 3 0 017 6z" fill={primaryFill} /></svg>;
};

export default Key16Regular;