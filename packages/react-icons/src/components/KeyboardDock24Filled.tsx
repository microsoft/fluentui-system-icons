import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardDock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 4.75c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 2.5 2 3.5 2 4.75v9.5c0 1.25 1.01 2.25 2.25 2.25H11v2.09l-.41-.42-.1-.08a1 1 0 00-1.32 1.5l2.13 2.12.09.08a1 1 0 00.55.2h.24a1 1 0 00.53-.28l2.12-2.12.08-.1a1 1 0 00-.08-1.32l-.1-.08a1 1 0 00-1.31.08l-.42.42V16.5h6.75c1.24 0 2.25-1 2.25-2.25v-9.5zM6.75 12h10.6a.75.75 0 010 1.5H6.65a.75.75 0 010-1.5h.1zm8.75-2.5a1 1 0 112 0 1 1 0 01-2 0zm-3 0a1 1 0 112 0 1 1 0 01-2 0zm-3 0a1 1 0 112 0 1 1 0 01-2 0zm-3 0a1 1 0 112 0 1 1 0 01-2 0zM5 6.5a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
};

export default KeyboardDock24Filled;