import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75A2.75 2.75 0 014.75 2h6.5A2.75 2.75 0 0114 4.75V7c-.45-.34-.95-.6-1.5-.77V5h-9v6.25c0 .7.56 1.25 1.25 1.25h1.48c.17.55.43 1.05.77 1.5H4.75A2.75 2.75 0 012 11.25v-6.5z" fill={primaryFill} /><path d="M8.5 6.5v.17c-.37.21-.7.47-1 .76V7h-2v3.5h.52a5.06 5.06 0 000 1H5a.5.5 0 01-.5-.5V6.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M10.34 15.18l-.02-.08a2 2 0 00-2.51-1.45c-.28-.36-.5-.77-.66-1.21a2 2 0 000-2.88c.16-.44.38-.85.66-1.2a2 2 0 002.5-1.46l.03-.08a3.98 3.98 0 011.32 0l.02.08a2 2 0 002.51 1.45c.28.36.5.77.66 1.21a2 2 0 000 2.88c-.16.44-.38.85-.66 1.2a2 2 0 00-2.5 1.46l-.03.08a3.99 3.99 0 01-1.32 0zm.66-3.03c.62 0 1.12-.51 1.12-1.15 0-.64-.5-1.15-1.12-1.15-.62 0-1.12.51-1.12 1.15 0 .64.5 1.15 1.12 1.15z" fill={primaryFill} /></svg>;
};

export default ContentSettings16Filled;