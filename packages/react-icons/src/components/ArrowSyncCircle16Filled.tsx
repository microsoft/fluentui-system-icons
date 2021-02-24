import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncCircle16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm2.5 6H8.91a.5.5 0 00.1 1h.32a1.67 1.67 0 01-2.53.16.5.5 0 10-.72.69A2.66 2.66 0 0010 9.76V10.1a.5.5 0 001-.1V8.41a.5.5 0 00-.5-.41zM8 5.33c-.79 0-1.5.35-2 .9v-.32a.5.5 0 00-1 .1v1.58a.5.5 0 00.5.41h1.59a.5.5 0 00-.1-1h-.32a1.67 1.67 0 012.53-.15.5.5 0 00.73-.7A2.66 2.66 0 008 5.34z" fill={primaryFill} /></svg>;
};

export default ArrowSyncCircle16Filled;