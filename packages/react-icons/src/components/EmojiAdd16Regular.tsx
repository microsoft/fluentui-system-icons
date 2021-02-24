import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EmojiAdd16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 7a6 6 0 10-5.75 6 4.47 4.47 0 01-.22-1H7a5 5 0 115-5v.03c.34.04.68.11 1 .22V7z" fill={primaryFill} /><path d="M7.11 10.5c.09-.37.21-.72.38-1.05a2.51 2.51 0 01-2.35-.78.5.5 0 00-.75.66 3.5 3.5 0 002.72 1.17z" fill={primaryFill} /><path d="M6 6a.75.75 0 11-1.5 0A.75.75 0 016 6z" fill={primaryFill} /><path d="M8.75 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M15 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-3-2a.5.5 0 00-1 0V11H9.5a.5.5 0 000 1H11v1.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H12V9.5z" fill={primaryFill} /></svg>;
};

export default EmojiAdd16Regular;