import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHoverOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 13l1.85 1.85a.5.5 0 00.7-.7l-2-2-11-11a.5.5 0 10-.7.7L2.39 3.1A2 2 0 001 5v5c0 1.1.9 2 2 2h4v-1H3a1 1 0 01-1-1V5a1 1 0 011-1h.3L8 8.7v5.8a.5.5 0 00.9.3l1.35-1.8h2.04zm-1-1H10a.5.5 0 00-.4.2L9 13V9.7l2.3 2.3z" fill={primaryFill} /><path d="M13.11 11a1 1 0 00.89-1V5a1 1 0 00-1-1H6.12l-1-1H13a2 2 0 012 2v5a2 2 0 01-1.1 1.78l-.79-.79z" fill={primaryFill} /></svg>;
};

export default CursorHoverOff16Regular;