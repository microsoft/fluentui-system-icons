import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerEdit20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 00-1.68-.73l-3.87 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l2.83 2.63.15-.6a3.2 3.2 0 01.84-1.5L12 12.95V3zm3.96 1.66a7.97 7.97 0 011.99 4.46c-.34-.1-.68-.14-1.02-.12a6.97 6.97 0 00-1.72-3.67.5.5 0 01.75-.67zm-1.2 2.59c.41.72.65 1.5.72 2.27-.14.1-.26.2-.38.32l-.63.63c.1-.92-.08-1.87-.58-2.72a.5.5 0 01.87-.5zm-3.78 8.12l4.83-4.83a1.87 1.87 0 112.64 2.65l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.02z" fill={primaryFill} /></svg>;
};

export default SpeakerEdit20Filled;