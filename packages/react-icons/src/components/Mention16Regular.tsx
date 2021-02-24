import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mention16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 016 6c0 1.68-1.13 3-2.5 3a1.7 1.7 0 01-1.61-.99c-.43.6-1.08.99-1.89.99-1.53 0-2.5-1.39-2.5-3S6.47 5 8 5c.6 0 1.1.2 1.5.56V5.5a.5.5 0 011-.09V8c0 1.36.35 2 1 2 .78 0 1.5-.84 1.5-2a5 5 0 10-3.78 4.85l.3-.08.2-.07a.5.5 0 01.34.94A5.88 5.88 0 018 14 6 6 0 018 2zm0 4c-.88 0-1.5.88-1.5 2s.62 2 1.5 2 1.5-.88 1.5-2S8.88 6 8 6z" fill={primaryFill} /></svg>;
};

export default Mention16Regular;