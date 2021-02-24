import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHoverOff16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 13l1.85 1.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.39 3.1A2 2 0 001 5v5c0 1.1.9 2 2 2h4V8.5c0-.23.05-.45.15-.65l.85.86v5.79a.5.5 0 00.9.3l1.35-1.8h2.04z" fill={primaryFill} /><path d="M13.9 11.78A2 2 0 0015 10V5a2 2 0 00-2-2H5.12l8.79 8.78z" fill={primaryFill} /></svg>;
};

export default CursorHoverOff16Filled;