import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drafts20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.24 2.82l-9.6 9.6-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.72-.46l9.61-9.6.13-.15a2.78 2.78 0 00-4.07-3.8zm-8.9 10.31l8.04-8.04 2.53 2.52-8.04 8.04-.1.09-.1.07a1 1 0 01-.25.1l-3.2.87.87-3.2.04-.13a1 1 0 01.22-.32zm12.13-9.6l.11.11c.59.7.55 1.75-.1 2.4l-.87.87-2.52-2.53.86-.86.12-.1c.7-.59 1.75-.55 2.4.1z" fill={primaryFill} /><path d="M11.65 3H2.5a.5.5 0 100 1h8.15l1-1z" fill={primaryFill} /><path d="M8.65 6H2.5a.5.5 0 100 1h5.15l1-1z" fill={primaryFill} /><path d="M4.65 10l1-1H2.5a.5.5 0 100 1h2.15z" fill={primaryFill} /></svg>;
};

export default Drafts20Regular;