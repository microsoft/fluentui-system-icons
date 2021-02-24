import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextSuperscript20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.33 3.25c-.3 0-.58.29-.58.61a.75.75 0 01-1.5 0 2.12 2.12 0 013.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 010 1.5h-2.64a.76.76 0 01-.05 0 .75.75 0 01-.75-.75c0-1.16.69-1.8 1.27-2.25L14.9 5l.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 00-.55-.26z" fill={primaryFill} /><path d="M9.49 10l2.85-3.33c.13-.56.39-1 .67-1.36a1.75 1.75 0 01-.68-.93L8.5 8.85 4.35 4A.75.75 0 103.22 5L7.52 10l-4.3 5.01a.75.75 0 101.13.98l4.15-4.84L12.64 16a.75.75 0 101.14-.98L9.48 10z" fill={primaryFill} /></svg>;
};

export default TextSuperscript20Filled;