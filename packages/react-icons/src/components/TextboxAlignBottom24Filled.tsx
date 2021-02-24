import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxAlignBottom24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zM6.75 13.5h-.1a.75.75 0 00.1 1.5h10.6a.75.75 0 00-.1-1.5H6.75zm10.5 3H6.65a.75.75 0 00.1 1.5h10.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
};

export default TextboxAlignBottom24Filled;