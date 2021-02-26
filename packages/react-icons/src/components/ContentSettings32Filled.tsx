import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9a5 5 0 015-5h14a5 5 0 015 5v5a9.99 9.99 0 00-2.5-1.37V10h-19v13A2.5 2.5 0 009 25.5h3.63A10 10 0 0014 28H9a5 5 0 01-5-5V9zm12 4v1c-.75.57-1.43 1.24-2 2v-2h-4v8h2c0 .68.07 1.35.2 2H9a1 1 0 01-1-1V13a1 1 0 011-1h6a1 1 0 011 1zm.68 15.57l.04-.16a4 4 0 00-2.9-5.02c-.12-.9-.1-1.82.08-2.74a4 4 0 002.88-4.99c.7-.6 1.5-1.1 2.34-1.43a4 4 0 005.8 0l.1-.12a7.97 7.97 0 012.3 1.32l-.04.16a4 4 0 002.9 5.02c.12.9.1 1.82-.08 2.74a4 4 0 00-2.88 4.99c-.7.61-1.5 1.1-2.34 1.43a4 4 0 00-5.8 0l-.1.12a7.97 7.97 0 01-2.3-1.32zM20.85 24c1.06.61 2.44.22 3.08-.88.64-1.1.3-2.5-.78-3.12a2.27 2.27 0 00-3.08.89c-.64 1.1-.3 2.5.78 3.1z" fill={primaryFill} /></svg>;
};

export default ContentSettings32Filled;