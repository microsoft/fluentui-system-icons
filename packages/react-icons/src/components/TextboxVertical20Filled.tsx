import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxVertical20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM7.5 6.7v6.6c0 .38-.34.7-.75.7S6 13.68 6 13.3V6.7c0-.38.34-.7.75-.7s.75.32.75.7zM9.75 6c.41 0 .75.32.75.7v3.6c0 .38-.34.7-.75.7S9 10.68 9 10.3V6.7c0-.38.34-.7.75-.7zm3 0c.41 0 .75.32.75.7v6.6c0 .38-.34.7-.75.7s-.75-.32-.75-.7V6.7c0-.38.34-.7.75-.7z" fill={primaryFill} /></svg>;
};

export default TextboxVertical20Filled;