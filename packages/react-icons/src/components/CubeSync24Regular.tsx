import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CubeSync24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.6 2.51c.9-.36 1.9-.36 2.8 0l7.5 3.04c.67.27 1.1.91 1.1 1.62v5.64a6.52 6.52 0 00-1.5-1.08V7.17c0-.1-.06-.19-.16-.23l-7.5-3.04a2.25 2.25 0 00-1.69 0l-7.5 3.04a.25.25 0 00-.15.23v9.65c0 .1.06.2.16.24l7.5 3.04c.14.05.29.1.44.12.25.55.57 1.05.96 1.5-.66.1-1.34.02-1.97-.23l-7.5-3.04C2.43 18.18 2 17.54 2 16.82V7.17c0-.71.43-1.35 1.1-1.62l7.5-3.04zm2.15 8.25v2.3a6.5 6.5 0 00-1.5 2.65v-4.95L6.48 8.95a.75.75 0 11.54-1.4L12 9.44l4.98-1.9a.75.75 0 01.54 1.41l-4.77 1.8zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM14.5 14a.5.5 0 00-.5.5v2c0 .27.22.5.5.5h2a.5.5 0 100-1h-1a2.5 2.5 0 014.03.03.5.5 0 00.8-.58 3.5 3.5 0 00-5.33-.4v-.55a.5.5 0 00-.5-.5zm5.5 5.95v.55a.5.5 0 001 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 100 1h1a2.5 2.5 0 01-3.91.11.5.5 0 10-.77.64 3.5 3.5 0 005.18.2z" fill={primaryFill} /></svg>;
};

export default CubeSync24Regular;