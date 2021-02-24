import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonAvailable16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 9c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C1 9.67 1.67 9 2.5 9h7zM6 2.5A2.75 2.75 0 116 8a2.75 2.75 0 010-5.5zm5.47 1.76l2.65-3.09a.5.5 0 01.81.58l-.05.08-3 3.5a.5.5 0 01-.66.08l-.07-.06-1.5-1.5a.5.5 0 01.63-.76l.07.06 1.12 1.11 2.65-3.09-2.65 3.1z" fill={primaryFill} /></svg>;
};

export default PersonAvailable16Filled;