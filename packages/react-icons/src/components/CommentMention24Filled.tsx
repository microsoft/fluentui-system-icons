import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMention24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 2a4 4 0 102.22 7.33.5.5 0 01.56.83A5 5 0 1123 6v.76a1.75 1.75 0 01-3.2.98A2.5 2.5 0 0115.5 6a2.5 2.5 0 014-2 .5.5 0 011 0v2.75a.75.75 0 001.5 0v-.76a4 4 0 00-4-4zm-1.5 4a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /><path d="M18 12c1.54 0 2.94-.58 4-1.53v4.28c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h7.55a6 6 0 005.2 9z" fill={primaryFill} /></svg>;
};

export default CommentMention24Filled;