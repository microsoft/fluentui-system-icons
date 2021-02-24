import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ThumbLike24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 5.2c0-2.44-1.14-4.2-3-4.2-1.03 0-1.39.6-1.75 2l-.15.57a268.66 268.66 0 01-.56 1.9L8.17 9.95a5.88 5.88 0 01-2.85 2.33l-.47.18a2.75 2.75 0 00-1.72 3.1l.4 2.08a3.25 3.25 0 002.42 2.54l7.63 1.87a4.75 4.75 0 005.73-3.44l1.42-5.55A3.25 3.25 0 0017.58 9h-1.83c.5-1.63.75-2.89.75-3.8zM4.6 15.27c-.11-.6.21-1.2.78-1.4l.47-.19a7.38 7.38 0 003.59-2.92l2.86-4.49c.1-.14.16-.29.2-.45a261.55 261.55 0 00.7-2.44c.19-.72.28-.88.3-.88.86 0 1.5.99 1.5 2.7 0 .89-.33 2.34-.98 4.32-.17.48.2.98.7.98h2.86a1.75 1.75 0 011.7 2.19l-1.42 5.55a3.25 3.25 0 01-3.93 2.35l-7.62-1.87A1.75 1.75 0 015 17.35l-.4-2.08z" fill={primaryFill} /></svg>;
};

export default ThumbLike24Regular;