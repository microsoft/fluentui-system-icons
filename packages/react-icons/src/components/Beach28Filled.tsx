import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Beach28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.15 2.98A7.7 7.7 0 0011.64 5.8l-.29.5a.75.75 0 00.28 1.02l5.46 3.15-3.27 5.72h-.07c-3.16 0-5.9 1.84-7.52 4.42a2 2 0 012.56 1.26c.6 1.8 2.77 1.7 3.32.1a2 2 0 013.78 0c.55 1.6 2.72 1.7 3.32-.1a2 2 0 012-1.37 9.28 9.28 0 00-5.77-4.13l2.95-5.15 5.27 3.05a.75.75 0 001.02-.28l.3-.5a7.7 7.7 0 00-2.83-10.51zM7.61 22.26a.75.75 0 00-1.44.06c-.26 1.04-.74 1.62-1.3 1.95a4.1 4.1 0 01-2.12.48.75.75 0 000 1.5c.96 0 2-.15 2.9-.7.53-.31.98-.74 1.33-1.3a4.45 4.45 0 007.02-.03 4.45 4.45 0 007.1-.09 5.19 5.19 0 004.15 2.12.75.75 0 000-1.5 3.64 3.64 0 01-3.43-2.48.75.75 0 00-1.43 0 2.96 2.96 0 01-5.68.11.75.75 0 00-1.42 0 2.96 2.96 0 01-5.68-.12z" fill={primaryFill} /></svg>;
};

export default Beach28Filled;