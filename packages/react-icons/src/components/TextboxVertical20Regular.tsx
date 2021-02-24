import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxVertical20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" fill={primaryFill} /><path d="M10 6.5a.5.5 0 10-1 0v4a.5.5 0 001 0v-4z" fill={primaryFill} /><path d="M7 6.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" fill={primaryFill} /><path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5z" fill={primaryFill} /></svg>;
};

export default TextboxVertical20Regular;