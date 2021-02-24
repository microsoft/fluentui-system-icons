import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallForward16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.7 1.17l-.75-.13a2.27 2.27 0 00-2.07.7C2.62 3.13 2 5.27 2 8.18c0 2.91.64 5 1.9 6.24a2.1 2.1 0 002.07.5l.75-.21c.7-.2 1.18-.89 1.1-1.6l-.14-1.42a1.35 1.35 0 00-1.13-1.2l-1.6-.27a5.49 5.49 0 01-.14-4.36l1.72-.45c.61-.15 1.07-.69 1.14-1.31l.14-1.43c.07-.72-.4-1.36-1.1-1.49z" fill={primaryFill} /><path d="M11.85 4.15a.5.5 0 00-.7.7L13.29 7H8.5a.5.5 0 000 1h4.8l-2.15 2.15a.5.5 0 00.7.7l3-3a.5.5 0 000-.7l-3-3z" fill={primaryFill} /></svg>;
};

export default CallForward16Filled;