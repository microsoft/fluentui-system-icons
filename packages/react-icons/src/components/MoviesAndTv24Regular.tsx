import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoviesAndTv24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.73 3.92l.05.16.55 1.92c.1.36-.08.74-.42.9l-.1.03L9.1 10h11.16c.38 0 .7.29.74.65v8.6A2.75 2.75 0 0118.43 22H5.75a2.75 2.75 0 01-2.74-2.58L3 19.25v-8.4l-.52-1.81c-.4-1.4.36-2.87 1.72-3.35l.16-.05 12.02-3.45c1.4-.4 2.87.37 3.35 1.73zm-.23 7.58h-15v7.75c0 .6.43 1.1 1 1.23l.12.01.13.01h12.5c.65 0 1.18-.5 1.24-1.12V11.5zM6.27 6.65l-1.5.43c-.62.18-1 .8-.88 1.42l.03.12.34 1.2.3-.08 1.71-3.1zm4.76-1.36l-2.72.77-1.71 3.1 2.72-.78 1.7-3.1zm4.76-1.37l-2.72.78-1.71 3.1L14.07 7l1.72-3.09zm1.84-.23l-1.52 2.74 2.57-.74-.34-1.2c-.1-.37-.38-.66-.7-.8z" fill={primaryFill} /></svg>;
};

export default MoviesAndTv24Regular;