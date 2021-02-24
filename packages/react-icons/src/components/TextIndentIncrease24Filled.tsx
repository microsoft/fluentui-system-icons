import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextIndentIncrease24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 16h8.5a1 1 0 01.12 2H9a1 1 0 01-.12-2h8.62H9zM2.3 9.3A1 1 0 013.6 9.2l.1.08 2 2a1 1 0 01.08 1.32l-.08.1-2 2a1 1 0 01-1.5-1.32l.08-.1L3.6 12l-1.3-1.3a1 1 0 010-1.4zM9 11h11.5a1 1 0 01.12 2H9a1 1 0 01-.12-2H20.5 9zm0-5h8.5a1 1 0 01.12 2H9a1 1 0 01-.12-2h8.62H9z" fill={primaryFill} /></svg>;
};

export default TextIndentIncrease24Filled;