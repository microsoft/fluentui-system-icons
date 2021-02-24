import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextItalic16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" /><path d="M2.5 13.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" /><path d="M10.38 2.03c.26.1.39.39.29.65l-4.2 11a.5.5 0 01-.94-.36l4.2-11a.5.5 0 01.65-.29z" /></svg>;
};

export default TextItalic16Regular;