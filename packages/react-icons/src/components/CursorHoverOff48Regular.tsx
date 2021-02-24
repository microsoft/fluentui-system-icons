import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHoverOff48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M36.1 37.88l5.77 5.75a1.25 1.25 0 001.76-1.76l-6-6-15.5-15.5-16-16a1.25 1.25 0 10-1.76 1.76L6.7 8.47c-1.6.76-2.7 2.4-2.7 4.28v18.5A4.75 4.75 0 008.75 36H18v-2.5H8.75c-1.24 0-2.25-1-2.25-2.25v-18.5c0-1.24 1-2.24 2.23-2.25L20 21.77v20.98a1.25 1.25 0 002.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.06 2.06zm-3.46-3.48l-3.97-1.01a3.25 3.25 0 00-3.5 1.33l-2.67 3.95v-14.4L32.64 34.4z" fill={primaryFill} /><path d="M13.3 8l2.5 2.5h23.45c1.24 0 2.25 1 2.25 2.25v18.5c0 1.24-1 2.25-2.25 2.25h-.45l2.18 2.18A4.75 4.75 0 0044 31.25v-18.5A4.75 4.75 0 0039.25 8H13.3z" fill={primaryFill} /></svg>;
};

export default CursorHoverOff48Regular;