import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextItalic16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 2.8c0-.41.34-.75.75-.75h5.8a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z" /><path d="M2.45 13.3c0-.41.34-.75.75-.75H9a.75.75 0 010 1.5H3.2a.75.75 0 01-.75-.75z" /><path d="M10.37 2.1c.38.15.58.58.43.97l-4 10.5a.75.75 0 01-1.4-.54l4-10.5a.75.75 0 01.97-.43z" /></svg>;
};

export default TextItalic16Filled;