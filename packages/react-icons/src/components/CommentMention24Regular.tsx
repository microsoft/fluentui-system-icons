import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMention24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 2a4 4 0 102.22 7.33.5.5 0 01.56.83A5 5 0 1123 6v.76a1.75 1.75 0 01-3.2.98A2.5 2.5 0 0115.5 6a2.5 2.5 0 014-2 .5.5 0 011 0v2.75a.75.75 0 001.5 0v-.76a4 4 0 00-4-4zm-1.5 4a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /><path d="M22 14.75v-4.28a6 6 0 01-1.5.99v3.29c0 .97-.78 1.75-1.75 1.75h-6.24L7.5 20.25V16.5H5.25c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.97.78-1.75 1.75-1.75h6.94c.14-.53.34-1.04.61-1.5H5.25A3.25 3.25 0 002 6.25v8.5C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 002 1L13 18h5.74c1.8 0 3.25-1.46 3.25-3.25z" fill={primaryFill} /></svg>;
};

export default CommentMention24Regular;