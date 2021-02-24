import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionFront20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M10 6.25c-.98 0-1.81.63-2.12 1.5H6.33a3.75 3.75 0 017.35 0h-1.56A2.25 2.25 0 0010 6.25z" fill={primaryFill} /><path d="M6.25 11.25h1.5v2.25a.75.75 0 01-1.5 0v-2.25z" fill={primaryFill} /><path d="M13.75 11.25h-1.5v2.25a.75.75 0 001.5 0v-2.25z" fill={primaryFill} /><path d="M3.5 14.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M3.5 8.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /></svg>;
};

export default TextPositionFront20Filled;