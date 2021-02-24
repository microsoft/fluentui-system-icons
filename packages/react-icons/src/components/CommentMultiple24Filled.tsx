import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMultiple24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 2a3.25 3.25 0 00-3.24 3h9.74C17.1 5 19 6.9 19 9.25v6.74c1.67-.12 3-1.53 3-3.24v-6A4.75 4.75 0 0017.25 2h-9z" fill={primaryFill} /><path d="M18 16a3.25 3.25 0 01-3.25 3h-4.08L7 21.75c-.82.62-2 .03-2-1v-1.76a3.25 3.25 0 01-3-3.24v-6.5A3.25 3.25 0 015.25 6h9.5C16.55 6 18 7.46 18 9.25V16z" fill={primaryFill} /></svg>;
};

export default CommentMultiple24Filled;