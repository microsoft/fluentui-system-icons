import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12.02c0 1.06-.2 2.1-.6 3.08l-.6 1.42a2.55 2.55 0 01-1.17 1.29c-.27.14-.56.21-.86.21h-2.55c-.77 0-1.49-.41-1.87-1.08-.5-.87-1.02-1.7-1.72-2.43l-1.32-1.39c-.44-.46-.97-.84-1.49-1.23l-.59-.45a.6.6 0 01-.23-.47c0-.75.54-1.57 1.22-1.79A3.34 3.34 0 017 9.47V4.5a1.5 1.5 0 012.05-1.4 1.5 1.5 0 012.9 0A1.5 1.5 0 0114 4.5v.09A1.5 1.5 0 0116 6v6.02zM12 4.5v4a.5.5 0 01-1 0v-5a.5.5 0 00-1 0v5a.5.5 0 01-1 0v-4a.5.5 0 00-1 0v6a.5.5 0 01-.85.37h-.01c-.22-.22-.44-.44-.72-.58-.7-.35-2.22-.57-2.4.5l.53.4c.52.4 1.04.78 1.48 1.24l1.33 1.38c.75.79 1.31 1.7 1.85 2.63.21.36.6.58 1.01.58h2.55c.13 0 .27-.03.4-.1.32-.17.57-.44.71-.78l.59-1.42c.35-.86.53-1.78.53-2.7V6a.5.5 0 00-1 0v3.5a.5.5 0 01-1 0v-5a.5.5 0 00-1 0z" fill={primaryFill} /></svg>;
};

export default HandLeft20Regular;