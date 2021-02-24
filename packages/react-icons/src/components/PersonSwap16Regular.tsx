import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonSwap16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 4.5a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0zm-4.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" fill={primaryFill} /><path d="M7.05 13.17l1.08 1.08H8c-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h4.18a1.5 1.5 0 00-.24.2l-.8.8H4.5a.5.5 0 00-.5.5v.5c0 1.25 1.08 2.6 3.05 2.92z" fill={primaryFill} /><path d="M7.15 11.86a.5.5 0 010-.71l2-2a.5.5 0 11.7.7L8.72 11h4.58l-1.14-1.14a.5.5 0 11.7-.7l2 1.99a.5.5 0 010 .7l-2 2a.5.5 0 11-.7-.7L13.29 12H8.71l1.15 1.15a.5.5 0 01-.71.7l-2-2z" fill={primaryFill} /></svg>;
};

export default PersonSwap16Regular;