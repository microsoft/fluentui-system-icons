import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.35 2.35A3.74 3.74 0 003.5 8.05V16.95a3.75 3.75 0 003.54 3.54l.2.01 8.5-.01h.2a3.74 3.74 0 002.41-1.06l2.36 2.35a.75.75 0 001.06-1.06L3.28 2.22zM17.3 18.36c-.4.39-.95.63-1.55.63l-8.5.01H7.1A2.25 2.25 0 015 16.74V8.06c.05-.53.28-1 .63-1.37l5.39 5.39c-.06.25 0 .51.2.7l.08.08c.18.13.41.17.62.12l5.38 5.38z" fill={primaryFill} /><path d="M13.06 9.88l1.06 1.06 5.38-5.38v4.8a.75.75 0 001.5-.1V3.72l-.01-.1-.01-.06-.02-.06-.04-.09-.06-.09-.08-.1-.07-.06a.7.7 0 00-.15-.1l-.06-.02-.1-.02-.1-.02H13.65a.75.75 0 00-.65.75v.1c.05.37.37.65.75.65h4.69l-5.38 5.38z" fill={primaryFill} /><path d="M19.5 16.32l-1.5-1.5v-1.59a.75.75 0 011.5-.1v3.19z" fill={primaryFill} /><path d="M7.68 4.5L9.18 6H10.85a.75.75 0 00-.1-1.5H7.68z" fill={primaryFill} /></svg>;
};

export default OpenOff24Regular;