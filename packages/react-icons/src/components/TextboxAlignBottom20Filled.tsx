import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxAlignBottom20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zM6.7 14h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75zm0-3h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75z" fill={primaryFill} /></svg>;
};

export default TextboxAlignBottom20Filled;