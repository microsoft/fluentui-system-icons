import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextItalic24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.65 18.5h3.85a1 1 0 010 2H5a1 1 0 01-1-1 1 1 0 011-1h3.5L13.34 6H10a1 1 0 010-2h8.5a1 1 0 010 2h-3.02l-4.83 12.5z" fillRule="nonzero" /></svg>;
};

export default TextItalic24Filled;