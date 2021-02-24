import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentArrowLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35A.5.5 0 008 5.5a.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L9.71 6h2.79a.5.5 0 000-1H9.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /><path d="M10.5 11A5.5 5.5 0 0015 8.66v.84a2.5 2.5 0 01-2.5 2.5H8.69l-3.06 2.68A.98.98 0 014 13.94V12h-.5A2.5 2.5 0 011 9.5v-5A2.5 2.5 0 013.5 2h2.76a5.5 5.5 0 004.24 9z" fill={primaryFill} /></svg>;
};

export default CommentArrowLeft16Filled;