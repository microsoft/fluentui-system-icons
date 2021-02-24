import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceDnd10Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 0a5 5 0 100 10A5 5 0 005 0zM1 5a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M3 5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3A.5.5 0 013 5z" fill={primaryFill} /></svg>;
};

export default PresenceDnd10Regular;