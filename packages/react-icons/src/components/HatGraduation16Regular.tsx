import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HatGraduation16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.37 2.45a2.5 2.5 0 00-2.74 0l-5.4 3.53a.5.5 0 00-.23.47.5.5 0 000 .05v4a.5.5 0 001 0V7.34l1 .68v3.68c0 .12.04.23.12.33l.03.03a3.83 3.83 0 00.32.32A6.57 6.57 0 008 14.2a6.57 6.57 0 004.53-1.82 5.46 5.46 0 00.32-.32l.02-.03h.01a.5.5 0 00.12-.33V8.02l1.78-1.2c.14-.1.22-.21.22-.42a.5.5 0 00-.23-.42l-5.4-3.53zM12 8.7v2.8a4.9 4.9 0 01-.97.78c-.72.46-1.75.92-3.03.92a5.58 5.58 0 01-4-1.7V8.7l2.6 1.76a2.5 2.5 0 002.8 0L12 8.7zm-8.5 3l-.38.33.38-.33zm3.68-8.42a1.5 1.5 0 011.64 0L13.6 6.4 8.84 9.63a1.5 1.5 0 01-1.68 0L2.4 6.4l4.78-3.13z" fill={primaryFill} /></svg>;
};

export default HatGraduation16Regular;