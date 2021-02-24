import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SetTopStack20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4.75c.19 0 .36.1.44.27l.88 1.68 1.74.2a.5.5 0 01.25.9l-1.25 1 .43 1.84a.5.5 0 01-.75.54L8 10.14l-1.74 1.04a.5.5 0 01-.75-.54l.43-1.85-1.25-1a.5.5 0 01.25-.88l1.74-.21.88-1.68A.5.5 0 018 4.75zm0 1.58l-.56 1.06a.5.5 0 01-.38.27l-.81.1.56.45a.5.5 0 01.18.5l-.24 1 1-.58a.5.5 0 01.5 0l1 .59-.24-1a.5.5 0 01.18-.51l.56-.45-.8-.1a.5.5 0 01-.4-.27L8 6.33z" fill={primaryFill} /><path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H4z" fill={primaryFill} /><path d="M6 15a2 2 0 01-1.73-1H12a3 3 0 003-3V5.27c.6.34 1 .99 1 1.73v4a4 4 0 01-4 4H6z" fill={primaryFill} /><path d="M8 17a2 2 0 01-1.73-1H12a5 5 0 005-5V7.27c.6.34 1 .99 1 1.73v2a6 6 0 01-6 6H8z" fill={primaryFill} /></svg>;
};

export default SetTopStack20Regular;