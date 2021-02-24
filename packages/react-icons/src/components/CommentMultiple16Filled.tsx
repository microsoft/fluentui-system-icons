import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMultiple16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 1a2.5 2.5 0 00-2.45 2H10a3 3 0 013 3v4.95a2.5 2.5 0 002-2.45V4a3 3 0 00-3-3H5.5z" fill={primaryFill} /><path d="M12 6a2 2 0 00-2-2H3a2 2 0 00-2 2v5c0 1.1.9 2 2 2v1.03a1 1 0 001.58.81L7.16 13H10a2 2 0 002-2V9.54l.06-.04H12V6z" fill={primaryFill} /></svg>;
};

export default CommentMultiple16Filled;