import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMention20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 2a3 3 0 101.28 5.71.5.5 0 01.44.9A4 4 0 1119 5v.51a1.5 1.5 0 01-2.65.97A2 2 0 0113 5a2 2 0 013.04-1.7.5.5 0 01.96.2v2a.5.5 0 101 0V5a3 3 0 00-3-3zm-1 3a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /><path d="M15 10c1.13 0 2.16-.37 3-1v3.28a2.58 2.58 0 01-2.6 2.56h-4.59L6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h5.82A4.98 4.98 0 0015 10z" fill={primaryFill} /></svg>;
};

export default CommentMention20Filled;