import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FStop16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.06 4.1c.19-1.17 1.4-1.89 2.53-1.49l.4.15a.75.75 0 10.51-1.42l-.4-.14c-2.01-.72-4.18.56-4.53 2.66L7.1 6.75H4.5a.75.75 0 100 1.5h2.35l-.43 2.63a1.92 1.92 0 01-2.93 1.3l-.34-.21a.75.75 0 10-.8 1.26l.34.22a3.42 3.42 0 005.2-2.32l.48-2.88h2.13a.75.75 0 000-1.5H8.62l.44-2.65z" fill={primaryFill} /></svg>;
};

export default FStop16Filled;