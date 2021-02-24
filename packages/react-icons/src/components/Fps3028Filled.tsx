import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps3028Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 3A3.5 3.5 0 0014 6.5v5a3.5 3.5 0 107 0v-5A3.5 3.5 0 0017.5 3zm0 10a1.5 1.5 0 01-1.5-1.5v-5a1.5 1.5 0 013 0v5c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /><path d="M18 19.85c0-1.3 1.05-2.35 2.35-2.35h1.15a2 2 0 012 2 .75.75 0 01-1.5 0 .5.5 0 00-.5-.5h-1.15a.85.85 0 00-.85.85V20a1 1 0 001 1h.5a2.5 2.5 0 012.5 2.5v.15c0 1.3-1.05 2.35-2.35 2.35h-.65a2.5 2.5 0 01-2.5-2.5.75.75 0 011.5 0 1 1 0 001 1h.65c.47 0 .85-.38.85-.85v-.15a1 1 0 00-1-1h-.5A2.5 2.5 0 0118 20v-.15z" fill={primaryFill} /><path d="M5.75 17.5a.75.75 0 00-.75.75v7a.75.75 0 001.5 0V22.5h1.75a.75.75 0 000-1.5H6.5v-2h2.75a.75.75 0 000-1.5h-3.5z" fill={primaryFill} /><path d="M11.5 18.25c0-.41.34-.75.75-.75h2.25a2.5 2.5 0 010 5H13v2.75a.75.75 0 01-1.5 0v-7zM13 21h1.5a1 1 0 100-2H13v2z" fill={primaryFill} /><path d="M9.5 10a1.5 1.5 0 11-1.08 2.54c-.27-.27-.6-.54-.98-.54-.74 0-1.32.68-.93 1.31A3.5 3.5 0 1011.95 9 3.49 3.49 0 009.5 3a3.5 3.5 0 00-3 1.69c-.38.63.2 1.31.94 1.31.39 0 .71-.27.98-.54A1.5 1.5 0 0111 6.5c0 .83-.67 1.5-1.5 1.5a1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Fps3028Filled;