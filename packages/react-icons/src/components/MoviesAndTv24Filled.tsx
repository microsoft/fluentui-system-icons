import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoviesAndTv24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.73 3.88l.05.15.55 1.93c.1.36-.08.74-.42.89l-.1.03L9.1 9.96h11.16c.38 0 .7.28.74.65v8.6a2.75 2.75 0 01-2.57 2.74H5.75a2.75 2.75 0 01-2.74-2.57L3 19.2v-8.4L2.48 9c-.4-1.41.36-2.87 1.72-3.35l.16-.06 12.02-3.44c1.4-.4 2.87.36 3.35 1.73zM6.27 6.6l-1.5.43c-.62.17-1 .8-.88 1.42l.03.12.34 1.2.3-.08 1.71-3.1zm4.76-1.37l-2.72.78-1.71 3.1 2.72-.79 1.7-3.09zm4.76-1.36l-2.72.78-1.71 3.09 2.71-.78 1.72-3.1zm1.84-.23l-1.52 2.74 2.57-.74-.34-1.2c-.1-.38-.38-.66-.7-.8z" fill={primaryFill} /></svg>;
};

export default MoviesAndTv24Filled;