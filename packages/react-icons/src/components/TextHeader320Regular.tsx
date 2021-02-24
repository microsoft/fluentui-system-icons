import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextHeader320Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5a.5.5 0 00-1 0v11a.5.5 0 001 0V10h6v5.5a.5.5 0 001 0v-11a.5.5 0 00-1 0V9H3V4.5z" fill={primaryFill} /><path d="M11.98 6.64c.09-.3.28-.7.66-1.04.38-.32.95-.6 1.86-.6C16.24 5 17 6.19 17 7c0 .5-.1 1.11-.5 1.6-.37.46-1.08.9-2.5.9a.5.5 0 000 1c.5 0 1.3.06 1.94.36.31.15.57.34.76.6.18.24.3.57.3 1.04 0 1-.33 1.6-.76 1.96a2.7 2.7 0 01-1.74.54c-.7 0-1.22-.12-1.61-.36-.38-.24-.7-.63-.92-1.3a.5.5 0 10-.94.32c.27.83.71 1.44 1.33 1.83.61.38 1.34.51 2.14.51.82 0 1.7-.2 2.38-.77.7-.58 1.12-1.48 1.12-2.73 0-.66-.18-1.2-.5-1.63-.3-.42-.7-.7-1.1-.9.36-.2.65-.46.88-.74.6-.74.72-1.63.72-2.23 0-1.39-1.24-3-3.5-3a3.7 3.7 0 00-2.51.85 3.22 3.22 0 00-.97 1.51.5.5 0 00.96.28z" fill={primaryFill} /></svg>;
};

export default TextHeader320Regular;