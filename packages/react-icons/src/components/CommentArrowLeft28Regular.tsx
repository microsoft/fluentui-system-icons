import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentArrowLeft28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.5.5a.5.5 0 000-1h-4.8l1.65-1.65a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L19.71 7h4.79z" fill={primaryFill} /><path d="M24.5 17.25v-4.98a6.52 6.52 0 001.5-1.08v6.06A3.75 3.75 0 0122.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 012 17.25V6.75A3.75 3.75 0 015.75 3h10.27c-.3.46-.53.97-.7 1.5H5.74c-1.24 0-2.25 1-2.25 2.25v10.5c0 1.24 1 2.25 2.25 2.25H8.5v4.8c0 .2.23.32.4.2l6.92-5h6.43c1.24 0 2.25-1 2.25-2.25z" fill={primaryFill} /></svg>;
};

export default CommentArrowLeft28Regular;