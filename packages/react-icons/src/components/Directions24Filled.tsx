import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Directions24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.3 2.98l6.72 6.72a3.25 3.25 0 010 4.6l-6.72 6.72a3.25 3.25 0 01-4.6 0L2.98 14.3a3.25 3.25 0 010-4.6L9.7 2.98a3.25 3.25 0 014.6 0zm-.7 4.24l-.1-.07a.75.75 0 00-.88-.01l-.09.08-.07.08c-.2.27-.2.62-.01.89l.08.1.72.7-1.5.01h-.17a2.75 2.75 0 00-2.57 2.58l-.01.17v3.35a.75.75 0 001.5 0v-3.48c.07-.59.53-1.05 1.12-1.11l.13-.01h1.5l-.72.72-.07.08a.75.75 0 001.05 1.05l.08-.07 2-2 .07-.08c.2-.26.2-.62.01-.89l-.08-.09-2-2-.08-.07.08.07z" fill={primaryFill} /></svg>;
};

export default Directions24Filled;