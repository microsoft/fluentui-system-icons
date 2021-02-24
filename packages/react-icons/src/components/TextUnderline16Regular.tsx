import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextUnderline16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2c.28 0 .5.22.5.5V8c0 1.62 1.38 3 3 3s3-1.38 3-3V2.5a.5.5 0 011 0V8c0 2.18-1.82 4-4 4-2.18 0-4-1.82-4-4V2.5c0-.28.22-.5.5-.5z" /><path d="M4 13.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" /></svg>;
};

export default TextUnderline16Regular;