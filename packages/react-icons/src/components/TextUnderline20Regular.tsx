import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextUnderline20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 16a.5.5 0 010 1h-9a.5.5 0 010-1h9zm0-13a.5.5 0 01.5.41v6.54A5.02 5.02 0 0110 15a5.02 5.02 0 01-5-4.83V3.5a.5.5 0 011-.09v6.54C6 12.2 7.8 14 10 14c2.14 0 3.9-1.7 4-3.84V3.5c0-.28.22-.5.5-.5z" fillRule="nonzero" /></svg>;
};

export default TextUnderline20Regular;