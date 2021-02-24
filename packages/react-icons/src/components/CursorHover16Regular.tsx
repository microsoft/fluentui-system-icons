import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHover16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z" fill={primaryFill} /><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z" fill={primaryFill} /></svg>;
};

export default CursorHover16Regular;