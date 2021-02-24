import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneSpanOut20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2a2 2 0 00-2 2v3.09A1.5 1.5 0 016.91 9h.59a1.5 1.5 0 110 3h-.59A1.5 1.5 0 015 13.91V16c0 1.1.9 2 2 2h6a2 2 0 002-2v-2.09A1.5 1.5 0 0113.09 12h-.59a1.5 1.5 0 010-3h.59A1.5 1.5 0 0115 7.09V4a2 2 0 00-2-2H7z" fill={primaryFill} /><path d="M14.85 8.15a.5.5 0 00-.7.7L15.29 10H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2z" fill={primaryFill} /><path d="M4.7 10l1.15-1.15h.01a.5.5 0 00-.71-.7l-2 2a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L4.71 11H7.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5H4.7z" fill={primaryFill} /></svg>;
};

export default PhoneSpanOut20Filled;