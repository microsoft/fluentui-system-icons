import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextUnderline20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.25 15.5a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6zm0-12.5c.38 0 .7.28.74.65l.01.1V9c0 1.37-.34 2.74-1.16 3.78A4.67 4.67 0 0110 14.5c-1.7 0-3-.65-3.84-1.72A5.96 5.96 0 015 9.28V3.74a.75.75 0 011.5-.1V9c0 1.14.29 2.15.84 2.85C7.87 12.53 8.7 13 10 13c1.3 0 2.13-.47 2.66-1.15.51-.65.8-1.55.83-2.59L13.5 9V3.75c0-.41.34-.75.75-.75z" fillRule="nonzero" /></svg>;
};

export default TextUnderline20Filled;