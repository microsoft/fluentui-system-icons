import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextUnderline24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5a1 1 0 012 0v6c0 3.46 1.32 5 4.25 5 2.93 0 4.25-1.54 4.25-5v-6a1 1 0 012 0v6c0 4.54-2.18 7-6.25 7-4.08 0-6.25-2.46-6.25-7v-6zM7 21a1 1 0 010-2h10.5a1 1 0 010 2H7z" fillRule="nonzero" /></svg>;
};

export default TextUnderline24Filled;