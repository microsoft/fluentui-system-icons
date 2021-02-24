import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const News20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M10 12.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M5.5 9a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 3v-2h2v2H6z" fill={primaryFill} /><path d="M2 5c0-1.1.9-2 2-2h10a2 2 0 012 2v1a2 2 0 012 2v5.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5V5zm13 0a1 1 0 00-1-1H4a1 1 0 00-1 1v8.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8a1 1 0 00-1-1v6.5a.5.5 0 01-1 0V5z" fill={primaryFill} /></svg>;
};

export default News20Regular;