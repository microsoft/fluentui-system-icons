import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMultiple16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.05 3A2.5 2.5 0 015.5 1H12a3 3 0 013 3v4.5a2.5 2.5 0 01-2 2.45V11a2 2 0 01-2 2H7.16l-2.58 1.84A1 1 0 013 14.03V13a2 2 0 01-2-2V5c0-1.1.9-2 2-2h.05zm1.04 0H11a2 2 0 012 2v4.91c.58-.2 1-.76 1-1.41V4a2 2 0 00-2-2H5.5c-.65 0-1.2.42-1.41 1zM12 11V5a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h1v2.03L6.84 12H11a1 1 0 001-1z" fill={primaryFill} /></svg>;
};

export default CommentMultiple16Regular;