import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontIncrease24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.81 4.41l.07.1.05.12 5.5 14a1 1 0 01-1.81.85l-.05-.11L15.24 16H8.75l-1.32 3.37a1 1 0 01-1.18.6l-.12-.03a1 1 0 01-.6-1.19l.04-.11 5.5-14a1 1 0 011.74-.23zM12 7.73L9.54 14h4.92L12 7.73zm5.68-4.66c.2-.1.44-.1.64 0l.1.06 2.25 1.5.08.06a.75.75 0 01-.82 1.24l-.1-.06L18 4.65l-1.83 1.22-.1.06a.75.75 0 01-.82-1.24l.08-.07 2.26-1.5.1-.05z" fill={primaryFill} /></svg>;
};

export default FontIncrease24Filled;