import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Question16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a3 3 0 00-3 3 .75.75 0 001.5 0 1.5 1.5 0 013 0c0 .65-.12 1.02-.25 1.25-.14.24-.33.4-.6.64l-.06.05c-.26.21-.6.5-.88.93-.3.49-.46 1.08-.46 1.88v.5a.75.75 0 001.5 0v-.5c0-.58.12-.89.24-1.08.13-.22.31-.37.62-.63.28-.23.66-.55.94-1.05.29-.5.45-1.14.45-1.99a3 3 0 00-3-3z" fill={primaryFill} /><path d="M8 14.25a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Question16Filled;