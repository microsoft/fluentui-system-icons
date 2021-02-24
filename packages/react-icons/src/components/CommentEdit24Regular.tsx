import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 14.75C2 16.55 3.46 18 5.25 18H6v2.75a1.25 1.25 0 002 1l2.12-1.59.4-1.58c.07-.29.18-.56.31-.82l-3.33 2.5V16.5H5.25c-.97 0-1.75-.78-1.75-1.75v-8.5c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v3.84c.55.14 1.07.42 1.5.83V6.25C22 4.45 20.54 3 18.75 3H5.25A3.25 3.25 0 002 6.25v8.5z" fill={primaryFill} /><path d="M18.1 11.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 10-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default CommentEdit24Regular;