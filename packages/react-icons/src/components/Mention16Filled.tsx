import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mention16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1.75c3.45 0 6.25 2.8 6.25 6.25 0 1.8-1.24 3.25-2.75 3.25-.73 0-1.27-.29-1.64-.8-.47.5-1.1.8-1.86.8-1.69 0-2.75-1.52-2.75-3.25S6.31 4.75 8 4.75c.51 0 .96.14 1.35.38a.75.75 0 011.4.27V8c0 1.24.28 1.75.75 1.75.63 0 1.25-.72 1.25-1.75a4.75 4.75 0 10-3.6 4.6l.29-.07.2-.07a.75.75 0 01.6 1.37l-.1.04-.25.09A6.25 6.25 0 118 1.75zm0 4.5C7.28 6.25 6.75 7 6.75 8S7.28 9.75 8 9.75 9.25 9 9.25 8 8.72 6.25 8 6.25z" fill={primaryFill} /></svg>;
};

export default Mention16Filled;